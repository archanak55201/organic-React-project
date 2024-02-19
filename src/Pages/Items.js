import React from 'react'

const Items = [
    {
        "name":"Crocs",
        "price":"259",
        "title":"Crocs",
        "dimension":"13.5*7.75",
        "image":[1,2,3]
    },
    {
        "name":"sush-yoga-doll",
        "price":"999",
        "title":"Sush Yoga Doll",
        "dimension":"Nil",
        "image":[1,2,3]
    },
    {
        "name":"robot",
        "price":"999",
        "title":"Robot",
        "dimension":"Nil",
        "image":[1,2]
    },
    {
        "name":"unicorn",
        "price":"599",
        "title":"Unicorn",
        "dimension":"Nil",
        "image":[1,2]
    },
    {
        "name":"ring-stacker",
        "price":"459",
        "title":"Ringo the Ring Stacker",
        "dimension":"Nil",
        "image":[1,2,3]
    },
    {
        "name":"penguin",
        "price":"799",
        "title":"Pingu Penguin Set",
        "dimension":"Nil",
        "image":[1,2,3]
    },
    {
        "name":"musketeers",
        "price":"687",
        "title":"Three Musketeers",
        "dimension":"11.5*9",
        "image":[1,2,3,4]
    },
    {
        "name":"fabric-balloon",
        "price":"349",
        "title":"Fabric ballon",
        "dimension":"15*11.75",
        "image":[1,2,3]
    },
    {
        "name":"cushion",
        "price":"1299",
        "title":"Customised Perfume Shape Cushions",
        "dimension":"Nil",
        "image":[1,2]
    },
    {
        "name":"badal",
        "price":"489",
        "title":"Badal",
        "dimension":"10*21",
        "image":[1]
    },
    {
        "name":"crown",
        "price":"199",
        "title":"Customised Name Crown",
        "dimension":"Nil",
        "image":[1]
    },
    {
        "name":"customised-name-bunting",
        "price":"399",
        "title":"Customised Name Bunting",
        "dimension":"Nil",
        "image":[1,2]
    },
    {
        "name":"giffy-the-giraffe",
        "price":"449",
        "title":"Giffy The Giraffe",
        "dimension":"22*24",
        "image":[1,2]
    },
    {
        "name":"hathi",
        "price":"459",
        "title":"Hathi Ka Bachha",
        "dimension":"10*17",
        "image":[1,2]
    },
    {
        "name":"Rocky-the-rocket",
        "price":"459",
        "title":"Rocky The Rocket",
        "dimension":"17*10.5",
        "image":[1,2]
    },
    {
        "name":"sky-in-a-room",
        "price":"1199",
        "image":[1]
    },
    {
        "name":"avo-cuddle",
        "price":"399",
        "title":"Avo Cuddle",
        "dimension":"10*7",
        "image":[1,2]
    },
    {
        "name":"baby-doggo",
        "price":"499",
        "title":"Baby Doggo",
        "dimension":"11*14",
        "image":[1,2]
    },
    {
        "name":"baby-groot",
        "price":"389",
        "title":"Baby Groot",
        "dimension":"12*10",
        "image":[1]
    },
    {
        "name":"bunny-doll",
        "price":"499",
        "title":"Bunny Doll",
        "dimension":"17.5*11",
        "image":[1]
    },
    {
        "name":"chanda-mama",
        "price":"399",
        "title":"Chanda Mama",
        "dimension":"15*13",
        "image":[1]
    },
    {
        "name":"christmas-bunting",
        "price":"499",
        "title":"Christmas Bunting",
        "dimension":"27*5",
        "image":[1]
    },
    {
        "name":"clowdy-dowdy",
        "price":"529",
        "title":"Clowdy Dowdy",
        "dimension":"14*21",
        "image":[1]
    },
    {
        "name":"cushioned-customised-name-bunting",
        "price":"1399",
        "title":"Cushioned Customised name Bunting",
        "dimension":"Nil",
        "image":[1]
    },
    {
        "name":"diano",
        "price":"399",
        "title":"Diano",
        "dimension":"13*13.5",
        "image":[1]
    },
    {
        "name":"drama-liama",
        "price":"419",
        "title":"Drama Llama",
        "dimension":"15.5*12.5",
        "image":[1,2]
    },
    {
        "name":"hokey-pokey-hedgehog",
        "price":"329",
        "title":"Hokey Pokey",
        "dimension":"26*13",
        "image":[1,2]
    },
    {
        "name":"hoppy-the-frog",
        "price":"459",
        "title":"Hoppy The Frog",
        "dimension":"19.5*28.5",
        "image":[1,2]
    },
    {
        "name":"leaf-bunting",
        "price":"499",
        "title":"Leaf Bunting",
        "dimension":"Nil",
        "image":[1]
    },
    {
        "name":"marvel-shield",
        "price":"469",
        "title":"Marvel Shield",
        "dimension":"12*11",
        "image":[1]
    },
    {
        "name":"melody-mona",
        "price":"299",
        "title":"Melody Mona",
        "dimension":"13*5.5",
        "image":[1,2]
    },
    {
        "name":"milky-the-cow",
        "price":"459",
        "title":"Milky The Cow",
        "dimension":"12.5*11",
        "image":[1,2]
    },
    {
        "name":"miss-minute",
        "price":"529",
        "title":"Miss Minute",
        "dimension":"15*21",
        "image":[1]
    },
    {
        "name":"monkey-man",
        "price":"499",
        "title":"Monkeyman",
        "dimension":"21*19",
        "image":[1]
    },
    {
        "name":"murgi-ka-bachha",
        "price":"369",
        "title":"Murgi Ka Bachha",
        "dimension":"12*9.5",
        "image":[1]
    },
    {
        "name":"owlie",
        "price":"459",
        "title":"Owlie",
        "dimension":"13.5*13.5",
        "image":[1]
    },
    {
        "name":"peppa-piggy",
        "price":"429",
        "title":"Peppa Piggy",
        "dimension":"16*15",
        "image":[1]
    },
    {
        "name":"rosie-the-flamingo",
        "price":"399",
        "title":"Rosie The Flamingo",
        "dimension":"13*19",
        "image":[1]
    },
    {
        "name":"samudri-ghodha",
        "price":"359",
        "title":"Samudri Ghodha",
        "dimension":"10.5*6.5",
        "image":[1]
    },
    {
        "name":"sunny-the-sunflower",
        "price":"619",
        "title":"Sunny The Sunflower",
        "dimension":"15*15",
        "image":[1]
    },
    {
        "name":"sweet-santa",
        "price":"239",
        "title":"Sweet Santa",
        "dimension":"12*5",
        "image":[1]
    },
    {
        "name":"the-cacti",
        "price":"419",
        "title":"The Cacti",
        "dimension":"15*9",
        "image":[1]
    },
    {
        "name":"the-jucy-lucy",
        "price":"409",
        "title":"The Jucy Lucy",
        "dimension":"13.5*9.5",
        "image":[1,2]
    },
    {
        "name":"the-space-boy",
        "price":"349",
        "title":"The Space Boy",
        "dimension":"10.5*11",
        "image":[1]
    },
    {
        "name":"trikon-cushion-set",
        "price":"899",
        "title":"Trikon Cushion Set",
        "dimension":"Nil",
        "image":[1]
    }
   
]

export default Items