@echo off
REM Get the current date and time
set "YYYY=%date:~10,4%"
set "MM=%date:~4,2%"
set "DD=%date:~7,2%"
set "HH=%time:~0,2%"
set "Min=%time:~3,2%"
set "Sec=%time:~6,2%"
if "%HH:~0,1%" == " " set HH=0%HH:~1,1%

set "timestamp=%YYYY%-%MM%-%DD%_%HH%-%Min%-%Sec%"

cd D:\Main Stuff\PlayWright\e2e\Kalbe

REM Run the Playwright test script and generate a report with the timestamp in the filename
npx playwright test klbweb-pstv-lgn.spec.js --reporter=html --output=results\report_%timestamp%