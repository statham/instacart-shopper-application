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

### Discussion
I attempted to create this app using only React, Redux, and surrounding libraries, to keep this app lightweight and fast. However this caused me to spend the majority of my time writing boilerplate code instead of solving the actual problem statement. If I had spent more time on the submission, I would have loved to implement the rest of the requested features (logging user to console, storing sessions and loading previous application state from stored session) as well as implementing a ui that is actually somewhat visually pleasing.

## Part 2

### Run the script
Please download the sqlite3 file containing the database to the root directory as `applicants.sqlite3`.
From the root directory, you can run the script with:
```
python scripts/applicant_analysis.py start_date end_date
```
