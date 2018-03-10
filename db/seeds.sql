-- add burgers to burger table
INSERT INTO 
	burgers (burger_name, devoured)
VALUES 
	("Into Mordor", false),
    ("Hot Tamale", false),
    ("Itty Bitty", true),
    ("Cry Me a River", true),
    ("Goodbye Vegan Diet", false),
    ("Go Home Hungry", true);
    
-- displays all burgers  
SELECT * FROM burgers;