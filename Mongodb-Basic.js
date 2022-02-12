MongoDB Basic Assignment
1.Connect to a running mongo instance, use a database named mongo_practice.
	use mongo_practice.


2.Insert the following documents into a movies collection.

title : Fight Club
writer : Chuck Palahniuko
year : 1999
actors : [
 Brad Pitt
 Edward Norton
]
 Ans :- db.movies.insertOne({title:'Fight Club',writer:'Chuck Palahniko',year:1999,actors:['Brad pitt','Edward Norton']})

title : Pulp Fiction
writer : Quentin Tarantino
year : 1994
actors : [
 John Travolta
 Uma Thurman
]

Ans :- db.movies.insertOne({title:'Pulp Fiction',writer:'Quentin Tarantino',year:1994,actors:['John Travolta','Uma Thurman']})

title : Inglorious Basterds
writer : Quentin Tarantino
year : 2009
actors : [
 Brad Pitt
 Diane Kruger
 Eli Roth
]

Ans :- db.movies.insertOne({title:'Inglorious Basterds',writer:'Quentin Tarantio',year:2009,actors:['Brad Pitt','Diane Kruger','Eli Roth']})

title : The Hobbit: An Unexpected Journey
writer : J.R.R. Tolkein
year : 2012
franchise : The Hobbit

Ans :- db.movies.insertOne({title:'The Hobbit: An Unexpected Journey', writer:'J.R.R. Tolkein', year:2012, franchise:'The Hobbit'})

title : The Hobbit: The Desolation of Smaug
writer : J.R.R. Tolkein
year : 2013
franchise : The Hobbit

Ans :- db.movies.insertOne({title:'The Hobbit: The Desolation of Smag', writer:'J.R.R. Tolkein', year:2013, franchise:'The Hobbit'})

title : The Hobbit: The Battle of the Five Armies
writer : J.R.R. Tolkein
year : 2012
franchise : The Hobbit
synopsis : Bilbo and Company are forced to engage in a war against an array of
combatants and keep the Lonely Mountain from falling into the hands of a rising
darkness.

Ans :-  db.movies.insertOne({title:'The Hobbit: The Battle of the Five Armies', writer:'J.R.R. Tolkein', year:2012, franchise:'The Hobbit' , synopsis:' Bilbo and Company are forced to engage in a war against an array ofcombatants and keep the Lonely Mountain from falling into the hands of a risingdarkness.'})


title : Pee Wee Hermans Big Adventure

Ans :- db.movies.insertOne({title:'Pee Wee Hermans Big Adventure'})

title : Avatar

Ans :- db.movies.insertOne({title:'Avatar'})

#Query / Find Documents

query the movies collection to

1)Get all documents

Ans :- db.movies.find()

2).get all documents with writer set to "Quentin Tarantino"

Ans :- db.movies.find({writer:"Quentin Tarantino"})

3).get all documents where actors include "Brad Pitt"

Ans :- db.movies.find({actors:"Brand Pitt"})

4).get all documents with franchise set to "The Hobbit"

Ans :-db.movies.find({franchise:"The Hobbit"})

5). get all movies released in the 90s

Ans:- db.movies.find({year:{$lt:2000}})

6).get all movies released before the year 2000 or after 2010

Ans :- db.movies.find({year:{$gt:2010}})

#Update Documents

1).add a synopsis to "The Hobbit: An Unexpected Journey" : "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."

Ans :- db.movies.update({title:'The Hobbit: An Unexpected Journey' } ,{$set:{synopsis:'A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug.'}}


2)add a synopsis to "The Hobbit: The Desolation of Smaug" : "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."

Ans:- db.movies.update({title:'The Hobbit: The Desolation of Smaug' } ,{$set:{synopsis:'The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest toreclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.'}})

3).add an actor named "Samuel L. Jackson" to the movie "Pulp Fiction"

Ans:- db.movies.update({title:'Pulp Fiction'}, {$push:{actors:'Samuel L. Jackson'}}0


	#Text Search

1. find all movies that have a synopsis that contains the word "Bilbo"
	ANS :-  db.movies.find({$text:{$search:"Bilbo"}})

2. find all movies that have a synopsis that contains the word "Gandalf"

	Ans :- db.movies.find({$text:{$search:"Gandalf"}})

3. find all movies that have a synopsis that contains the word "Bilbo" and not the word "Gandalf"

	Ans :-  db.movies.find({$text:{$search:"Bilbo-Ganddalf"}})

4. find all movies that have a synopsis that contains the word "dwarves" or "hobbit"
	ANS :-  db.movies.find({$text:{$search:"dwarves or hobbit"}})

5. find all movies that have a synopsis that contains the word "gold" and"dragon"
	Ans :-  db.movies.find({$text:{$search:"gold and dragon"}})


	
Delete Documents

1.delete the movie "Pee Wee Herman's Big Adventure"
	Ans :- db.movies.deleteMany({title:'Pee Wee Hermans Big Adeventure'}

2.  delete the movie "Avatar"

	Ans ;-db.movies.deleteMany({title:'Avatar'}




Querying related collections

1.find all users

	Ans:- db.users.find()

2. find all posts

	Ans :- db.posts.find()

3.find all posts that was authored by "GoodGuyGreg"

	Ans:- db.posts.find({username:"GoodGuyGreg"})

4.find all posts that was authored by "ScumbagSteve"
	Ans :- db.posts.find({username:"ScumbagSteve"})

5. find all comments
	Ans :- db.comments.find()

6. find all comments that was authored by "GoodGuyGreg"
	Ans :-db.comments.find({username:"GoodGuyGreg"})

7. find all comments that was authored by "ScumbagSteve"

	Ans :-db.comments.find({username:"ScumbagSteve"})


8. find all comments belonging to the post "Reports a bug in your code"
	Ans:- db.comments.find({username:"Reports a bug in your code"})

