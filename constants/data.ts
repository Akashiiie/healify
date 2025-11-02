export const virus = [
    {
	name : "Common Cold",
	description : "",
    },
    {
	name : "Influenza",
	description : "",
    },
    {
	name : "Gastroenteritis",
	description : "",
    },
    {
	name : "Mumps",
	description : "",
    },
    {
	name : "Stomach Flu",
	description : "",
    },
    {
	name : "Astrovirus",
	description : "",
    },
    {
	name : "Enterovirus",
	description : "",
    },
    {
	name : "Adenovirus",
	description : "",
    },
];
export const monthly_virus = {
    "January" : virus[0],
    "February" : virus[1],
    "March" : virus[1],
    "April" : virus[1],
    "May" : virus[1],
    "June" : virus[1],
    "July" : virus[1],
    "August" : virus[1],
    "September" : virus[1],
    "October" : virus[1],
    "November" : virus[1],
    "December" : virus[1],
};

export const medicine_list = [
    {
	medicineId : 1,
	name : "Tylenol" ,
	image : require("@/assets/images/medicine/Tylenol.jpg"),
	description : "A pain reliever and fever reducer that works by inhibiting the production of prostaglandins in the brain. It does not reduce inflammation.",
	usage : "Relieves mild to moderate pain (headache, toothache, muscle pain) and reduces fever. It is gentle on the stomach but does not have anti-inflammatory effects.",
	availability : {
	    overTheCounter : true,
	    controlled : true,
	},
	usedFor : [
	    {
		optgroup : "Head",
		options : [
		    "headache",
		    "tootache",
		]
	    },
	],
    },
    {
	medicineId : 2,
	name : "Ibuprofen" ,
	image : require("@/assets/images/medicine/Ibuprofen.jpg"),
	description : "An NSAID (Non-Steroidal Anti-Inflammatory Drug) that reduces inflammation, pain, and fever by blocking the enzyme cyclooxygenase (COX).",
	usage : "Used for pain relief (headaches, muscle aches, menstrual cramps), inflammation (arthritis, injury), and fever reduction. It works by reducing inflammation in the body.",
	availability : {
	    overTheCounter : true,
	    controlled : true,
	},
	usedFor : [
	    {
		optgroup : "Head",
		options : [
		    "headache",
		]
	    },
	    {
		optgroup : "Body",
		options : [
		    "bodyache",
		    "cramps",
		]
	    },
	],
    },
    {
	medicineId : 3,
	name : "Aspirin" ,
	image : require("@/assets/images/medicine/Aspirin.jpg"),
	description : "An NSAID that inhibits the COX-1 and COX-2 enzymes to reduce pain, inflammation, and fever. It also has blood-thinning properties.",
	usage : "Relieves pain, reduces inflammation, and lowers fever. Also used for cardiovascular protection (reducing the risk of heart attacks and strokes in some cases).",
	availability : {
	    overTheCounter : true,
	    controlled : true,
	},
	usedFor : [
	    {
		optgroup : "Body",
		options : [
		    "bodyache",
		    "cramps",
		    "inflammation",
		]
	    },
	],
    },
    {
	medicineId : 4,
	name : "Benadryl" ,
	image : require("@/assets/images/medicine/Benadryl.png"),
	description : "A first-generation antihistamine that blocks histamine receptors, helping to reduce allergic reactions. It also has sedative properties",
	usage : "Relieves symptoms of allergies (sneezing, runny nose, itching) and hives. It is also used for motion sickness and as a short-term sleep aid.",
	availability : {
	    overTheCounter : true,
	    controlled : true,
	},
	usedFor : [
	    {
		optgroup :"Skin",
		options: [
		    "itchy",
		    "allergy",
		]
	    },
	],
    },
    {
	medicineId : 5,
	name : "Claritin" ,
	image : require("@/assets/images/medicine/Claritin.jpg"),
	description : "A second-generation antihistamine that blocks histamine without causing significant sedation.",
	usage : "Treats seasonal allergies (hay fever), allergic rhinitis, and itching caused by hives. Non-drowsy alternative to older antihistamines.",
	availability : {
	    overTheCounter : true,
	    controlled : true,
	},
	usedFor : [
	    {
		optgroup :"Skin",
		options: [
		    "itchy",
		    "allergy",
		]
	    },
	],
    },
    {
	medicineId : 6,
	name : "Zyrtec" ,
	image : require("@/assets/images/medicine/Zyrtec.jpg"),
	description : "A second-generation antihistamine that works similarly to Claritin but may cause mild sedation in some people.",
	usage : "Treats seasonal allergies, hay fever, and hives. It is slightly sedating for some people but still less so than older antihistamines like Benadryl.",
	availability : {
	    overTheCounter : true,
	    controlled : true,
	},
	usedFor : [
	    {optgroup :"Skin", options: [
		"allergy",
	    ]},
	],
    },
    {
	medicineId : 7,
	name : "Omeprazole" ,
	image : require("@/assets/images/medicine/Omeprazole.png"),
	description : "A proton pump inhibitor (PPI) that works by decreasing the amount of acid produced in the stomach.",
	usage : "Reduces stomach acid production to treat conditions like GERD (acid reflux), ulcers, and other acid-related stomach issues.",
	availability : {
	    overTheCounter : true,
	    controlled : true,
	},
	usedFor : [
	    {
		optgroup :"Stomach", options: [
		    "acid",
		]
	    },
	],
    },
    {
	medicineId : 8,
	name : "Naproxen" ,
	image : require("@/assets/images/medicine/Naproxen.jpg"),
	description : "An NSAID that reduces pain, inflammation, and fever by blocking pain-causing chemicals in the body. It lasts longer than ibuprofen.",
	usage : "Relieves pain, inflammation, and reduces fever. Often used for arthritis, menstrual cramps, and muscle pain. It has a longer duration of action than ibuprofen.",
	availability : {
	    overTheCounter : true,
	    controlled : true,
	},
	usedFor : [
	    {optgroup :"Body", options: [
		"inflammation",
		"bodyache",
	    ]},
	],
    },
    {
	medicineId : 9,
	name : "Pepto-Bismol" ,
	image : require("@/assets/images/medicine/Pepto-Bismol.jpg"),
	description : "An antidiarrheal and antacid that coats the stomach and intestines, soothing irritation and helping to reduce symptoms like nausea, indigestion, and diarrhea.",
	usage : "Used to treat stomach upset, nausea, indigestion, and diarrhea. It helps coat the stomach lining and reduces irritation.",
	availability : {
	    overTheCounter : true,
	    controlled : true,
	},
	usedFor : [
	    {optgroup :"Stomach", options: [
		"stomach ache",
		"nausea",
	    ]},
	],
    },
    {
	medicineId : 10,
	name : "Azelastine" ,
	image : require("@/assets/images/medicine/Azelastine.jpg"),
	description : "An intranasal antihistamine spray that blocks the action of histamine, reducing symptoms of allergies.",
	usage : "Nasal antihistamine spray used to relieve symptoms of allergic rhinitis such as sneezing, nasal congestion, and runny nose.",
	availability : {
	    overTheCounter : true,
	    controlled : true,
	},
	usedFor : [
	    {optgroup :"Head", options: [
		"runny nose",
	    ]},
	],
    },
    {
	medicineId : 11,
	name : "Benzoic Acid" ,
	image : require("@/assets/images/medicine/BenzoicAcid.jpg"),
	description : "A topical antiseptic used to treat minor skin infections and fungal conditions by killing or preventing the growth of bacteria and fungi.",
	usage: "Used topically as an antiseptic to treat skin infections, or as a preservative in cosmetics and food products. It helps to reduce bacterial growth.",
	availability : {
	    overTheCounter : true,
	    controlled : true,
	},
	usedFor : [
	    {optgroup :"Skin", options: [
		"itchy",
		"mild infection",
	    ]},
	],
    },
    {
	medicineId : 12,
	name : "Cough Drops" ,
	image : require("@/assets/images/medicine/CoughDrops.jpg"),
	description : "Contain menthol and/or eucalyptus, which provide a cooling effect and temporarily numb the throat. They can also help clear nasal passages.",
	usage: "Soothes throat irritation and helps reduce coughing. Often contains menthol, honey, or eucalyptus for temporary relief.",
	availability : {
	    overTheCounter : true,
	    controlled : true,
	},
	usedFor : [
	    {optgroup :"Head", options: [
		"sore throat",
		"coughing",
	    ]},
	],
    },
    {
	medicineId : 13,
	name : "Benzocaine" ,
	image : require("@/assets/images/medicine/Benzocaine.png"),
	description : "A local anesthetic that numbs the affected area by blocking nerve signals.",
	usage: "A local anesthetic used to numb the skin and mucous membranes. Commonly used in topical treatments for sore throats, toothaches, or minor skin irritation.",
	availability : {
	    overTheCounter : true,
	    controlled : true,
	},
	usedFor : [
	    {optgroup :"Head", options: [
		"sore throat",
		"toothache",
	    ]},
	],
    },
    {
	medicineId : 14,
	name : "Imodium" ,
	image : require("@/assets/images/medicine/Imodium.jpg"),
	description : "An anti-diarrheal medication that works by slowing down the movement of the intestines, allowing for more water absorption.",
	usage: "Used to treat diarrhea by slowing down the movement of the intestines and allowing more water to be absorbed.",
	availability : {
	    overTheCounter : true,
	    controlled : true,
	},
	usedFor : [
	    {optgroup :"Stomach", options: [
		"diarrhea",
	    ]},
	],
    },
    {
	medicineId : 15,
	name : "Guaifenesin" ,
	image : require("@/assets/images/medicine/Guaifenesin.png"),
	description : "An expectorant that loosens mucus in the airways and makes it easier to clear phlegm from the chest.",
	usage: "An expectorant that helps loosen mucus in the airways, making it easier to cough up and clear congestion during colds or respiratory infections.",
	availability : {
	    overTheCounter : true,
	    controlled : true,
	},
	usedFor : [
	    {optgroup :"Head", options: [
		"sore throat",
		"cough",
	    ]},
	],
    },
    {
	medicineId : 16,
	name : "Hydrocortisone Cream" ,
	image : require("@/assets/images/medicine/Hydrocortisone.jpg"),
	description : "A mild corticosteroid that reduces inflammation and itching by suppressing the immune response.",
	usage: "A topical corticosteroid used to reduce inflammation, itching, and irritation from skin conditions like eczema, rashes, and insect bites.",
	availability : {
	    overTheCounter : true,
	    controlled : true,
	},
	usedFor : [
	    {optgroup :"Skin", options: [
		"itchy",
		"mild infection",
	    ]},
	],
    },
    {
	medicineId : 17,
	name : "Betadine" ,
	image : require("@/assets/images/medicine/Betadine.png"),
	description : "A broad-spectrum antiseptic that works by releasing iodine, which kills bacteria, viruses, and fungi on the skin surface.",
	usage: "An antiseptic used for disinfecting minor cuts, scrapes, and burns. It helps to prevent infection by killing bacteria and fungi on the skin.",
	availability : {
	    overTheCounter : true,
	    controlled : true,
	},
	usedFor : [
	    {optgroup :"Skin", options: [
		"wound",
	    ]},
	    {optgroup :"Body", options: [
		"wound",
	    ]},
	],
    },
    {
	medicineId : 18,
	name : "Zantac" ,
	image : require("@/assets/images/medicine/Zantac.jpg"),
	description : "An H2 blocker that reduces the production of stomach acid by blocking histamine receptors in the stomach lining.",
	usage: "Reduces stomach acid production, used to treat acid reflux (GERD), heartburn, and ulcers. It may also help with conditions that cause excess stomach acid production.",
	availability : {
	    overTheCounter : true,
	    controlled : true,
	},
	usedFor : [
	    {optgroup :"Stomach", options: [
		"acid",
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
	"dizzy",
	"headache",
	"toothache",
	"runny nose",
	"sore throat",
	"cough",
    ]},
    {
	optgroup :"Skin", options: [
	    "itchy",
	    "allergy",
	    "mild infection",
	"wound",
	]},
    {optgroup : "Body", options : [
	"bodyache",
	"cramps",
	"inflammation",
	"wound",
    ]},
    {optgroup : "Stomach", options : [
	"stomach ache",
	"acid",
	"nausea",
	"diarrhea",
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
export const current_month = "November";
