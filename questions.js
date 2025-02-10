const questions = [
	// Từ file 1 (Câu 1-7)
	{
		question:
			"1. Jackie knows how to use word processors, spreadsheets, and presentation software. They also have a basic knowledge of hardware, software, and the Internet. Given this information, it can be concluded that Jackie has ___ literacy.",
		options: ["network", "computer", "information", "business"],
		correctAnswer: 1, // (b) computer
	},
	{
		question: "2. Transaction-processing systems ____",
		options: [
			"involves low volumes of data",
			"requires extensive managerial judgment",
			"involves repetitive operations",
			"requires maximum human involvement",
		],
		correctAnswer: 2, // (c) involves repetitive operations
	},
	{
		question: "3. The data component of an information system is:",
		options: [
			"the input to the information system.",
			"a series of integrated files containing relevant facts.",
			"a set of facts that the process component has analyzed.",
			"the output of the information system.",
		],
		correctAnswer: 0, // (b) a series of integrated files...
	},
	{
		question:
			"4. In the context of the data component of an information system, internal data sources include ____",
		options: [
			"personnel records",
			"population statistics",
			"economic conditions",
			"government agencies",
		],
		correctAnswer: 0, // (a) personnel records
	},
	{
		question:
			"5. ____ is high when customers have many choices and low when they have few.",
		options: [
			"Buyer power",
			"Threat of new services",
			"Bribery among existing customers",
			"Risk of substitute products",
		],
		correctAnswer: 0, // (a) Buyer power
	},
	{
		question:
			"6. What is the difference between the data collected for SIS and MIS systems?",
		options: [
			"The data source is different because it focuses on long-term strategies.",
			"The language of the data is different because it needs to be more diverse.",
			"The data dates must be within the past 30 days with SIS.",
			"The date of the data must be within the last 90 days with SIS.",
		],
		correctAnswer: 0, // (a) The data source...
	},
	{
		question: "7. Second-generation computers used ____",
		options: [
			"vacuum tube technology",
			"transistors",
			"integrated circuits",
			"laser technology",
		],
		correctAnswer: 1, // (b) transistors
	},

	// Từ file 2 (Câu 8-14)
	{
		question:
			"8. When comparing types of chips, which characteristic is true of gallium arsenide chips?",
		options: [
			"They run at higher speeds than silicon chips.",
			"They were used in third-generation computers.",
			"They are ideal for mass production.",
			"They have low production costs.",
		],
		correctAnswer: 0, // (a) They run at higher speeds...
	},
	{
		question:
			"9. In differentiating between storage measurements, a ... is the size of a character.",
		options: ["megabyte", "bit", "byte", "Midbyte"],
		correctAnswer: 2, // (c) byte
	},
	{
		question: "10. The word computer consists of 64 bits, equivalent to ...",
		options: ["6 bits", "8 bytes", "16 bytes", "32 bytes"],
		correctAnswer: 1, // (b) 8 bytes
	},
	{
		question: "11. ... holds data when the computer is off.",
		options: [
			"Random access memory",
			"Read-only memory",
			"Secondary memory",
			"Programmable read-only memory",
		],
		correctAnswer: 2, // (c) Secondary memory
	},
	{
		question:
			"12. Jacob, a data analyst, is working on a project from home and needs to download some data from his office network. Which of the following server platforms relate to Jacob's purpose?",
		options: [
			"Remote access servers",
			"Web servers",
			"Application servers",
			"Disk servers",
		],
		correctAnswer: 0, // (a) Remote access servers
	},
	{
		question:
			"13. Which demonstrates a characteristic of fourth-generation languages (4GLs)?",
		options: [
			"They are the easiest computer languages to use.",
			"They are composed of rigorous command syntaxes.",
			"They contain a series of 0s and 1s representing data or instructions.",
			"They use artificial intelligence technologies, such as knowledge-based systems.",
		],
		correctAnswer: 0, // (a) They are the easiest ... 
	},
	{
		question:
			"14. Considering the data types in a database, which is a source of internal data?",
		options: [
			"Tax records",
			"Sales records",
			"Distribution networks",
			"Economic indicators",
		],
		correctAnswer: 1, // (b) Sales records
	},

	// Từ file 3 (Câu 15-20)
	{
		question:
			"15. What is the first step in database design that determines how data is created, represented, organized, and maintained?",
		options: ["Data warehouse", "Data mart", "Data dictionary", "Data model"],
		correctAnswer: 3, // (d) Data model
	},
	{
		question:
			"16. Which component of a data model describes methods and calculations that can be performed on data?",
		options: [
			"Data structure",
			"Operations",
			"Integrity rules",
			"File structure",
		],
		correctAnswer: 1, // (b) Operations
	},
	{
		question:
			"17. The data ___ component of a database management system (DBMS) is used for tasks such as backup and recovery.",
		options: ["Manipulation", "Generation", "Definition", "Administration"],
		correctAnswer: 3, // (d) Administration
	},
	{
		question:
			"18. A __sets as an interface to a database, retrieving data for users and allowing users to enter data in the database.",
		options: [
			"data-driven Website",
			"flat Web page",
			"stationary Web page",
			"static Web site",
		],
		correctAnswer: 0, // (a) data-driven Website
	},
	{
		question:
			"19. Which approach to set up a distributed database management system (DDBMS) combines the fragmentation approach and the replication approach?",
		options: ["optimization", "allocation", "encapsulation", "normalization"],
		correctAnswer: 1, // (b) allocation
	},
	{
		question:
			"20. Data warehouses are sometimes called hypercubes because they ___",
		options: [
			"are multi function-oriented",
			"store multidimensional data",
			"capture raw transaction data",
			"manage transactions",
		],
		correctAnswer: 1, // (b) store multidimensional data
	},
];
