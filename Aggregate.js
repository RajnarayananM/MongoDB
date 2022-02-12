MongoDB -Aggregation Exercises 

#Atlanta Population 
1.use db.zipcodes.find() to filter results to only the results where city is ATLANTA and state is GA. 

Ans :- db.zipcodes.find({},{city:”ALANTAN”,state:”GA”}
2.use db.zipcodes.aggregate with $match to do the same as above. 

 Ans :-db.zipcodes.aggregate( { {$match:{state:”ATLANTA” , state :”GA”}}})

3.use $group to count the number of zip codes in Atlanta. 
  Ans :- db.zipcodes.aggergate( [   
        …{$match:{city:”ALANTA”}},
        ….{$group:{_id:”$_id”}},
         …{$count:”Totalzips”}])


4.use $group to find the total population in Atlanta. 
Ans :- db.zipcodes.aggergate( [ 
      ….{$group:{_id:”city”,totalpop:{$sum:”pop”}}}
      …{$match:{_id:”ALANTA”}}])
                                                 
#Populations By State 

1.use aggregate to calculate the total population for each state
ANS :- db.zipcodes.aggergate( [ {group: {_id:”$state”,totalpop: {$sum:”$pop”}}}])

2.sort the results by population, highest first 
Ans :- db.zipcodes.aggergate( [ {group: {_id:”$state”,totalpop: {$sum:”$pop”}}},{totalpop:-1}}])

3.limit the results to just the first 3 results. What are the top 3 states in population?
Ans :- db.zipcodes.aggergate( [ {group: {_id:”$state”,totalpop: {$sum:”$pop”}}},{totalpop:-1}}, {$limt:3}])

#Populations by City 
1.use aggregate to calculate the total population for each city (you have to use city/state combination). You can use a combination for the _id of the $group: { city: '$city', state: '$state' } 
Ans :- db.zipcodes.aggergate( [ {group: {_id:{$scity”, state:”$state”} ,totalpop: {$sum:”$pop”}}},{$sort:_id:1}}])

2.sort the results by population, highest first 
Ans :- db.zipcodes.aggergate( [ {group: {_id:{$scity”, state:”$state”} ,totalpop: {$sum:”$pop”}}},{$sort:{totalpop:-1}}])

3.limit the results to just the first 3 results. What are the top 3 cities in population?
Ans:-  db.zipcodes.aggergate( [ {group: {_id:{$scity”, state:”$state”} ,totalpop: {$sum:”$pop”}}},{$sort:{totalpop:-1}},{$limit:3}])

4.What are the top 3 cities in population in Texas? 
Ans :- db.zipcodes.aggergate( [ {group: {_id:{$scity”, state:”$state”} ,totalpop: {$sum:”$pop”}}},{$sort:{totalpop:-1}},{$match:{“_id.state”:”TX”}}])


#Bonus 
1.Write a query to get the average city population for each state. 
Ans :- db.zipcodes.aggergate( [ 
…{$group: {_id : {state:”$state”, city:”$city”} ,pop: {$sum:”$pop”}}},
…{$group:{_id :”$_id.state” , avgcitypop:{$avg:”$pop”}}}
..])

2.What are the top 3 states in terms of average city population? 
  
Ans :- db.zipcodes.aggergate( [ {$group: {_id : {state:”$state”, city:”$city”} ,pop: {$sum:”$pop”}}},{$group:{_id :”$_id.state” , avgcitypop:{$avg:”$pop”}}},{$sort : {avgcitypop:-1}},{$limt:3} ])


