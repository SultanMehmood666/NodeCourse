Logging middleware: Morgan

//Map and set Function
const launches = new Map();
launches.set()
launches.get()
launches.has()


//Convet data into array
Array.from(launches.values())


//assign propertirs
const launch = {
flightNumber: 1
}
Object.assign(launch, {
    //add aditional properities and if it pre exist it will get updated
})

isNAN() this function is used to check if value is number or not used with if else mostly.
Its abbrevation is isNotaNumber means check if its not a number it will return true else false.

const date = new Date("January, 01, 2012") to set new date.



#####################  Testing Api  ###############################
Jset:
We could create __test__ folder for jest test at root OR we could create for example launches.spec.js file inside of each module we want to test


Testing Api with Jest: npm i jest --save-dev
1. Test runner: it will finds all the tests in your project, run throgh them give us results
2. Test Fixture: where a fixture is just how your test are setup and organized by modules and by individual tests
3. Assertion: function that allow to check that we expect 5+5 = 10  
4. Mocking: ex: we have database and 100 of test that create, update, Read, Delete in database in that case we create Mock 
 that use CRUD Operation but not effect data in our database

 superTest:
 npm i supertest --save-dev

 we could use it along jest


 ############# Performance ###################

// Json.stringify()
// json.parse("{}") => {}
// [1,2,3,4,5].sort

These function makes servers slow.

crypto module in node js slow down performance because it's design to do so so hacker don't check 10000 passwords in milliseconds.  


Node is single Threated means process single threat at a time but we can use multiple node process side by side
This will increase performance.
To achieve this we could use node built-in module cluster--->It create copies of your node process that run rach run 
your server side by side in parallel. 
Theory:
When we start server our node js create a master file and run it. But there is a function inside of cluster module called fork()
This fork we can use it many time we want it create copy of that msater file which is called worker and these files run along side with
master file.  
This is also called round robin approach means if you create 2 forks() and there are 3 request. 1 req will resolved by 1 worker and 2 by 2nd worker and 3rd is by 1st worker.


2.PM2 Tool:
npm i pm2
PM2 used node cluster module with additional capability

commands:
pm2 start servewr.js
pm2 start server.js -l logs.txt -i max (-i max means run number of worker as my machine have number of cores)
pm2 restart
pm2 delete server
pm2 list
pm2 logs
pm2 logs --lines 200 (Last 200 lines of logs)
pm2 monit (moniter it will give live dashboard inside of cmd)

#Zero Down Time Restart with pm2 
pm2 restart server

## Worker Threads
const worker = require('worker_threads)
It doesn't make node js multithreading becaue its single treaded from its core.
It means its will responsed with web workers Api in web browser
Worker Threads were introduced due to v8 feature called v8 isolatess.
We cauld think it as isolated sandboxes that run javascripts code independently of each other.
Worker threads use this and run code side by side in isolation