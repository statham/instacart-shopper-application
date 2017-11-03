# instacart-shopper-application

## Part 1

### Run the (unoptimized) app
```
npm install
npm start
```

### Run the production ready app
First compile the production build with:
```
npm run build
```

Now serve the optimized production build with:
```
npm install -g serve
serve -s build
```

## Part 2

### Run the script
Please download the sqlite3 file containing the database to the root directory as `applicants.sqlite3`.
From the root directory, you can run the script with:
```
python scripts/applicant_analysis.py start_date end_date
```
