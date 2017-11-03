import argparse
import csv
import datetime
import sqlite3
import sys
from sqlite3 import Error


def create_connection(db_file):
    try:
        conn = sqlite3.connect(db_file)
        return conn
    except Error as e:
        print e

def get_workflow_state_count(conn, week_start):
    cur = conn.cursor()
    week_end = week_start + datetime.timedelta(days=6)
    cur.execute("SELECT count(workflow_state), workflow_state FROM applicants WHERE created_at BETWEEN ? AND ? GROUP BY workflow_state", (
        datetime.datetime.strftime(week_start, "%Y-%m-%d"),
        datetime.datetime.strftime(week_end, "%Y-%m-%d")))
    return cur.fetchall()

def generate_weeks(start, end):
    weeks = []
    start_monday = (start - datetime.timedelta(days=start.weekday()))
    end_monday = (end - datetime.timedelta(days=end.weekday()))

    num_weeks = (end_monday - start_monday).days / 7
    for i in range(num_weeks):
        diff = datetime.timedelta(days=7 * i)
        week_start = start_monday + diff
        weeks.append(week_start)
    return weeks

def main():
    parser = argparse.ArgumentParser(description="Monitor how well applicants are being moved through the hiring process.")
    parser.add_argument('dates', metavar='date', nargs=2)
    args = parser.parse_args()

    start_date = datetime.datetime.strptime(args.dates[0], "%Y-%m-%d").date()
    end_date = datetime.datetime.strptime(args.dates[1], "%Y-%m-%d").date()

    database = "applicants.sqlite3"
    conn = create_connection(database)

    spamwriter = csv.writer(sys.stdout)
    with conn:
        weeks = generate_weeks(start_date, end_date)
        spamwriter.writerow(['count', 'week', 'workflow_state'])
        for week_start in weeks:
            rows = get_workflow_state_count(conn, week_start)
            for row in rows:
                spamwriter.writerow([row[0], week_start, row[1]])

    conn.close()


if __name__ == '__main__':
    main()
