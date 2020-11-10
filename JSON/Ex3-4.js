[
    {
        "name": "Cow",
        "weight": {
            "count": "700",
            "unit":"kg"
        },
        "living-area": ["All around"],
        "endangered": false,
        "foods": [
            {
                "food": "clover",
                "precentageOfDiet": 70
            }, 
            {
                "food": "grass",
                "precentageOfDiet": 30
            }
        ],
        "predators": ["wolves", "tigers", "humans"],
        "how-tasty": 1
    },
    {
        "name": "Elephant",
        "weight": {
            "count": "7500",
            "unit":"pound"
        },
        "living-area": ["Africa", "Asia"],
        "endangered": true,
        "foods": [
            {
                "food": "roots",
                "precentageOfDiet": 25
            }, 
            {
                "food": "grass",
                "precentageOfDiet": 25
            },
            {
                "food": "fruit",
                "precentageOfDiet": 25
            },
            {
                "food": "bark",
                "precentageOfDiet": 25
            }
        ],
        "predators": ["lions", "humans"],
        "how-tasty": 1
    },
    {
        "name": "Gray Wolf",
        "weight": {
            "count": "60",
            "unit":"kg"
        },
        "living-area": ["North America", "Asia", "Europe"],
        "endangered": false,
        "foods": [
            {
                "food": "mammals",
                "precentageOfDiet": 50
            }, 
            {
                "food": "birds",
                "precentageOfDiet": 10
            },
            {
                "food": "fish",
                "precentageOfDiet": 10
            },
            {
                "food": "lizards",
                "precentageOfDiet": 10
            },
            {
                "food": "snakes",
                "precentageOfDiet": 10
            },
            {
                "food": "fruit",
                "precentageOfDiet": 10
            }
        ],
        "predators": ["wolves", "coyotes"],
        "how-tasty": 1
    },
    {
        "name": "Squirrel",
        "weight": {
            "count": "500",
            "unit":"gram"
        },
        "living-area": ["America", "Europe", "Africa", "Asia"],
        "endangered": false,
        "foods": [
            {
                "food": "nuts",
                "precentageOfDiet": 99
            },
            {
                "food": "other stuff",
                "precentageOfDiet": 1
            }
        ],
        "predators": ["snakes", "racoons", "foxes", "bobcats", "coyotes"],
        "how-tasty": 1
    }
]

// Follow up questions:
// - yes, had to make living area an array instead of string
// - i hope so