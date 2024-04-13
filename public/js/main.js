'use strict';

let merchants_buttons = {
    'Groceries': '',
    'Clothings': '',
    'Computers': '',
    'Electronics': '',
    'Bookstores': '',
    'Hardwares': '',
    'Furnitures': '',
    'Pharmacies': '',
    'Beauty salons': '',
    'Restaurants': '',
    
    'Cafés': 'https://media.discordapp.net/attachments/1132191234002255934/1208244882146328576/hot-coffee-rounded-cup-on-a-plate-from-side-view.png?ex=65e294bc&is=65d01fbc&hm=4097b86350be9c41057f6787f5a02359757d37c875e89f9008421e759971f3be&=&format=webp&quality=lossless',
    'Pet stores': 'https://media.discordapp.net/attachments/1132191234002255934/1208244881928097812/cat.png?ex=65e294bb&is=65d01fbb&hm=83dbd025b29864047b8d856694f349ad5b1df78168d2301c0780357d99e8f103&=&format=webp&quality=lossless',
    'Auto repairs': 'https://media.discordapp.net/attachments/1132191234002255934/1208244881659666453/car-repair.png?ex=65e294bb&is=65d01fbb&hm=ac0e8b9620abc9b83198643e6e8bc23c5373b42d51d84878353f4cc8363663e6&=&format=webp&quality=lossless',
    'Florists': 'https://media.discordapp.net/attachments/1132191234002255934/1208244881412063272/florist.png?ex=65e294bb&is=65d01fbb&hm=ed9e8e5d1e6c80fd0c7745f5ebd505bba519613f248bad5de957518fd328b61e&=&format=webp&quality=lossless',
    'Jewelries': 'https://media.discordapp.net/attachments/1132191234002255934/1208244881172992031/jewelry-shop.png?ex=65e294bb&is=65d01fbb&hm=0e53fe89e59406e61a3169b5ad5ca2cbcda3f2a21e926cba892d0a26acf230ec&=&format=webp&quality=lossless',
    'Sports equipments': 'https://media.discordapp.net/attachments/1132191234002255934/1208244880942432267/exercise.png?ex=65e294bb&is=65d01fbb&hm=290182e726ef45ae97bd539bd3761f789bc25256192b83a93c391b591639ebd6&=&format=webp&quality=lossless',
    'Art galleries': 'https://media.discordapp.net/attachments/1132191234002255934/1208244880703234098/mona-lisa.png?ex=65e294bb&is=65d01fbb&hm=1925d28bb819dd65ab17d49046fe359eed746989ef1b6b5ba493093e8afc9497&=&format=webp&quality=lossless',
    'Gifts': 'https://media.discordapp.net/attachments/1132191234002255934/1208244880523137054/gift-box.png?ex=65e294bb&is=65d01fbb&hm=93897d244c2cedc3f495d1e168c5627da62bcc63911d2e7e6206bbdb1da52671&=&format=webp&quality=lossless',
    'Toys': 'https://media.discordapp.net/attachments/1132191234002255934/1208244880237928518/toy-shop.png?ex=65e294bb&is=65d01fbb&hm=f0a6cb33ffa2b7a04aa73fe713a06f67610562121d78ac248bcf02cb243d7936&=&format=webp&quality=lossless',
    'Stationeries': 'https://media.discordapp.net/attachments/1132191234002255934/1208244879990456361/stationery-container.png?ex=65e294bb&is=65d01fbb&hm=236f5d14bee7352e1096209980780cf754e20ac8832169c43d821706cf956148&=&format=webp&quality=lossless',
    
    'DIY': 'https://media.discordapp.net/attachments/1132191234002255934/1208245424012664862/diy.png?ex=65e2953d&is=65d0203d&hm=67d3741f1d09fb9a175ecc0fcf06a7603c2d089b7bba2fd3f092ac8da87f9a48&=&format=webp&quality=lossless',
    'Farmers markets': 'https://media.discordapp.net/attachments/1132191234002255934/1208245423706345552/fresh-food.png?ex=65e2953d&is=65d0203d&hm=4c91f409d260a05365285c92fd4eed826d2227dfd76a1f7b3ea46905973c30c6&=&format=webp&quality=lossless',
    'Antiques': 'https://media.discordapp.net/attachments/1132191234002255934/1208245423442235482/gramophone.png?ex=65e2953d&is=65d0203d&hm=e880af3087432504cd74cd720939f521808e2b136570cf7b12759d0d5ab7aeff&=&format=webp&quality=lossless',
    'Cosmetics': 'https://media.discordapp.net/attachments/1132191234002255934/1208245423177732096/cosmetics.png?ex=65e2953d&is=65d0203d&hm=8608544b0c1f8fe3c55baca3a1ea5ab494829f5991d55bb22e3a34ea2f20e09a&=&format=webp&quality=lossless',
    'Health foods': 'https://media.discordapp.net/attachments/1132191234002255934/1208245422666022952/wellness.png?ex=65e2953c&is=65d0203c&hm=72fcbd739581b1a7f705e1ed398941cda34deece3e027f8afe6790c5219d6a85&=&format=webp&quality=lossless',
    'Shoes': 'https://media.discordapp.net/attachments/1132191234002255934/1208245421713924136/sneakers.png?ex=65e2953c&is=65d0203c&hm=216a55f261756117a2f469ebcfc941a04adee1dcbb4d4eb3eccdccc72ae14ca0&=&format=webp&quality=lossless',
    'Cell phones': 'https://media.discordapp.net/attachments/1132191234002255934/1208245421437354024/touch.png?ex=65e2953c&is=65d0203c&hm=60805811ab0a41d7fcb76deca10fb2bd5be71aac308f243269f56a78bdc125e7&=&format=webp&quality=lossless',
    'Bicycles': 'https://media.discordapp.net/attachments/1132191234002255934/1208245421135241236/bicycle.png?ex=65e2953c&is=65d0203c&hm=3389719f6cd4bcfe9093c6f961b0ea533194ecdd3657e2a390e1bbed611b601d&=&format=webp&quality=lossless',
    'Musics': 'https://media.discordapp.net/attachments/1132191234002255934/1208245420543975484/music-store-app.png?ex=65e2953c&is=65d0203c&hm=4480e36c4dd8ff20532399a28b88d11896b16852036b96a0e078c7de83466f02&=&format=webp&quality=lossless',
    'Luggages': 'https://media.discordapp.net/attachments/1132191234002255934/1208245420258758656/luggage.png?ex=65e2953c&is=65d0203c&hm=da4c10466e947c6894082f0dcb4fb3f241fb5652b6b4ec623e23039c5d9b3421&=&format=webp&quality=lossless',
    
    'Party supplies': 'https://media.discordapp.net/attachments/1132191234002255934/1208245827588595784/party.png?ex=65e2959d&is=65d0209d&hm=5a8deed25b320c1af92f23165bcdc417711e56d49250c4dbab4604880c716814&=&format=webp&quality=lossless',
    'Babies': 'https://media.discordapp.net/attachments/1132191234002255934/1208245879668998194/shopping-cart.png?ex=65e295a9&is=65d020a9&hm=19c3372036a9f16beafe5746e74124265817ed133bfbdb505ae7b594a50a4871&=&format=webp&quality=lossless',
    'Outdoor gears': 'https://media.discordapp.net/attachments/1132191234002255934/1208245878310047794/jacket.png?ex=65e295a9&is=65d020a9&hm=d84256573a748af565e791e0b892510caf36b992c4943775d949ba7450f3f98f&=&format=webp&quality=lossless',
    'Eyewears': 'https://media.discordapp.net/attachments/1132191234002255934/1208245877832159262/sunglasses.png?ex=65e295a9&is=65d020a9&hm=52a28a941bb79ecf617808e75f11012f2a4f5f2581f50ae992df3d89f3a172c9&=&format=webp&quality=lossless',
    'Mattresses': 'https://media.discordapp.net/attachments/1132191234002255934/1208245877488099448/bed.png?ex=65e295a9&is=65d020a9&hm=41a24a6ed19197e094d30bcced329487e5f7c5747f08002d7ec05a8da2366f97&=&format=webp&quality=lossless',
    'Tailors': 'https://media.discordapp.net/attachments/1132191234002255934/1208245877169455104/tailoring.png?ex=65e295a9&is=65d020a9&hm=6903659d31ba5a643b3b12267bf3f5ae92b83161bb8713a5246196f85544a0c2&=&format=webp&quality=lossless',
    'Kitchenwares': 'https://media.discordapp.net/attachments/1132191234002255934/1208245876791836672/kitchenware.png?ex=65e295a9&is=65d020a9&hm=42f721024e319b86061f54fe146d1e168dc6c9f753353ec56be8788f4c1c44ec&=&format=webp&quality=lossless',
    'Comic books': 'https://media.discordapp.net/attachments/1132191234002255934/1208245876347117599/comic-book.png?ex=65e295a9&is=65d020a9&hm=0e67734623809aa60c26603a2baa9f444568211d6bc7ea7948cf5c0a0858e5a3&=&format=webp&quality=lossless',
    'Vape shops': 'https://media.discordapp.net/attachments/1132191234002255934/1208245875932143616/vape.png?ex=65e295a8&is=65d020a8&hm=d426e1b9b2f3e7765742cae000f3512bba6933ceea22eed1c61eaf85fc5880f2&=&format=webp&quality=lossless',
    'Tattoos': 'https://media.discordapp.net/attachments/1132191234002255934/1208245875537743872/tattoo-studio.png?ex=65e295a8&is=65d020a8&hm=97e4087232094e56975dcc51e0cc84b0dda5eeb259e51088677a9c6c52363df9&=&format=webp&quality=lossless',
    
    'Perfumes': 'https://media.discordapp.net/attachments/1132191234002255934/1208245875046875136/fragance.png?ex=65e295a8&is=65d020a8&hm=fb923a2cea8a7a51c143619359eb41139650c081bd8a1f7733260cb4d86eca25&=&format=webp&quality=lossless',
    'Watches': 'https://media.discordapp.net/attachments/1132191234002255934/1208245906311221248/watch.png?ex=65e295b0&is=65d020b0&hm=19fd8ccbd86807b23119945a1e3c7b1c1215ee78d068a8a53b5ecf0626de1852&=&format=webp&quality=lossless',
    'Influencers': 'https://media.discordapp.net/attachments/1132191234002255934/1208245906021941258/stick.png?ex=65e295b0&is=65d020b0&hm=130101b1f0c5167ab625f9e4f4122b9d87b0edf57b21b62c60e0458d37466d4b&=&format=webp&quality=lossless',
    'Golf attire': 'https://media.discordapp.net/attachments/1132191234002255934/1208272356695347220/golf-player.png?ex=65e2ae52&is=65d03952&hm=5ecc11073b45e34dc12b72f0d334254f6e21d5ba8f1e6603e1c4e30ea2c68a35&=&format=webp&quality=lossless',
}

let merchants_url = {
    'Groceries': '',
    'Clothings': 'https://commerce.grakchat.com.my/pl/1805',
    'Computers': '',
    'Electronics': '',
    'Bookstores': '',
    'Hardwares': '',
    'Furnitures': '',
    'Pharmacies': '',
    'Beauty salons': '',
    'Restaurants': '',
    'Cafés': '',
    'Pet stores': '',
    'Auto repairs': '',
    'Florists': '',
    'Jewelries': '',
    'Sports equipments': '',
    'Art galleries': '',
    'Gifts': '',
    'Toys': '',
    'Stationeries': '',
    'DIY': '',
    'Farmers markets': '',
    'Antiques': '',
    'Cosmetics': '',
    'Health foods': '',
    'Shoes': '',
    'Cell phones': '',
    'Bicycles': '',
    'Musics': '',
    'Luggages': '',
    'Party supplies': '',
    'Babies': '',
    'Outdoor gears': '',
    'Eyewears': '',
    'Mattresses': '',
    'Tailors': '',
    'Kitchenwares': '',
    'Comic books': '',
    'Vape shops': '',
    'Tattoos': '',
    'Perfumes': '',
    'Watches': '',
    'Influencers': '',
    'Golf attire': '',
}

function merchants() {
    let parent = document.getElementsByClassName('merchants_container')[0];
    for (const [key, value] of Object.entries(merchants_buttons)) {
        let merchants_button = document.createElement('div');
        merchants_button.classList.add('merchants_button')
        let img = document.createElement('img');
        img.setAttribute('src', `${window.location.href}//images/icons/${key}.png`);
        let a = document.createElement('a');
        a.innerHTML = key;
        if (merchants_url[key] != '') {
            a.setAttribute('href', merchants_url[key])
        }
        merchants_button.appendChild(img);
        merchants_button.appendChild(a);
        parent.appendChild(merchants_button);
    }
}

console.log("version 1")