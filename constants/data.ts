
export const medicine_list = [
    {
	medicineId : 1,
	name : "Tylenol" ,
	image : "",
	description : "Tylenol",
	availability : {
	    overTheCounter : true,
	    controlled : true,
	},
	usedFor : [
	    {optgroup : "Head",options : [
		"headache",
	    ]},
	],
    },
    {
	medicineId : 2,
	name : "Ibuprofen" ,
	image : "",
	description : "Ibuprofen",
	availability : {
	    overTheCounter : true,
	    controlled : true,
	},
	usedFor : [
	    {optgroup : "Head",options : [
		"headache",
	    ]},
	    {optgroup : "Body", options : [
		"bodyache",
		"cramps",
	    ]},
	],
    },
    {
	medicineId : 3,
	name : "Aspirin" ,
	image : "",
	description : "Aspirin",
	availability : {
	    overTheCounter : true,
	    controlled : true,
	},
	usedFor : [
	    {optgroup : "Body", options : [
		"bodyache",
		"cramps",
		"inflammation",
	    ]},
	],
    },
    {
	medicineId : 4,
	name : "Benadryl" ,
	image : "",
	description : "Benadryl",
	availability : {
	    overTheCounter : true,
	    controlled : true,
	},
	usedFor : [
	    {optgroup :"Skin", options: [
	    "itchy",
	]},
	],
    },
    {
	medicineId : 5,
	name : "Claritin" ,
	image : "",
	description : "Claritin",
	availability : {
	    overTheCounter : true,
	    controlled : true,
	},
	usedFor : [
	    {optgroup :"Skin", options: [
	    "itchy",
	]},
	],
    },
];

export const tips = [
    {}
];
export const seasonal_virus = [
    {
	month : "December",
	season : "Cold",
	name : "Flu"
    }
];
export const common_ailments = [
    {
	name : "Flu"
    }
];
export const symptoms = [
    {optgroup: "Eye",options : [
	"itchy",
	"pink eye",
	"dry"
    ]},
    {optgroup : "Head",options : [
	"itchy",
	"nauseous",
	"dizzy",
	"headache",
    ]},
    {
	optgroup :"Skin", options: [
	    "itchy",
	]},
    {optgroup : "Body", options : [
	"bodyache",
	"cramps",
	"inflammation",
    ]},
    {optgroup : "Legs" , options : [
	"cramps",
	"bruised",
    ]},
    {
	optgroup : "Feet",options : [
	    "cramps",
	    "bruised",
	]
    },
    {
	optgroup : "Hands" ,options: [
	    "cramps",
	    "swell",
	    "bruised",
	]
    },
    {
	optgroup :"Shoulders", options: [
	    "cramps",
	    "pain",
	]
    }
];
