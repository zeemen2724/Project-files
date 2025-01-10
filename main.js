document.addEventListener('DOMContentLoaded', () => {




    const backToTopButton = document.getElementById("backToTop");

    if (backToTopButton) {
        window.onscroll = function () {
            if (document.documentElement.scrollTop > 300) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        };

        backToTopButton.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }


    
    const listItems = document.querySelectorAll(".services-list li");

    function revealListItems() {
        const windowHeight = window.innerHeight;
        listItems.forEach((item, index) => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < windowHeight - 100) {
                setTimeout(() => {
                    item.classList.add("active");
                }, index * 200);
            }
        });
    }


    window.addEventListener("scroll", revealListItems);
    revealListItems();


    const counters = document.querySelectorAll('.count');
    const statsSection = document.querySelector('.travel-stats');
    let statsAnimated = false;

    function animateCounters() {
        if (!statsAnimated && statsSection.getBoundingClientRect().top < window.innerHeight) {
            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;


                    const increment = target / 200;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + increment);
                        setTimeout(updateCount, 20);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
            });
            statsAnimated = true;
        }
    }

    window.addEventListener("scroll", animateCounters);
    animateCounters();



});



const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

const nextSlide = () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
};

setInterval(nextSlide, 3000); 









document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector('.gallery-slider');
    let scrollAmount = 0;
    const slideWidth = 320; 
    
    setInterval(() => {
        if (scrollAmount >= slider.scrollWidth - slider.offsetWidth) {
            scrollAmount = 0;
        } else {
            scrollAmount += slideWidth;
        }
        slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }, 7000);
});




$(document).ready(function () {
    const products = [
        // New Year Packages
        {
            name: "New Year in Paris",
            price: "PKR 200,000",
            description: "Celebrate New Year under the Eiffel Tower.",
            category: "New Year",
            image: "assets/New Year in Paris.jpg",
            details: "Includes flight, hotel stay, and city tours."
        },
        {
            name: "Dubai New Year Celebration",
            price: "PKR 180,000",
            description: "Watch the iconic fireworks at Burj Khalifa.",
            category: "New Year",
            image: "assets/Dubai New Year Celebration.jpg",
            details: "Includes flight, 5-star hotel, and desert safari."
        },
        {
            name: "New York Times Square",
            price: "PKR 250,000",
            description: "Experience the ball drop in Times Square.",
            category: "New Year",
            image: "assets/New York Times Square.jpg",
            details: "Includes flight, hotel, and sightseeing."
        },
        {
            name: "Sydney Harbor Fireworks",
            price: "PKR 300,000",
            description: "Celebrate New Year with a view of the Opera House.",
            category: "New Year",
            image: "assets/Sydney Harbor Fireworks.jpg",
            details: "Includes flight, hotel, and harbor cruise."
        },
        {
            name: "Tokyo Countdown",
            price: "PKR 220,000",
            description: "Ring in the New Year in vibrant Tokyo.",
            category: "New Year",
            image: "assets/Tokyo Countdown.jpg",
            details: "Includes flight, hotel, and cultural tours."
        },
        {
            name: "Maldives Beach Party",
            price: "PKR 280,000",
            description: "Enjoy a luxurious New Year on the beach.",
            category: "New Year",
            image: "assets/Maldives Beach Party.jpg",
            details: "Includes flight, overwater villa, and festivities."
        },

        // Hajj/Umrah Packages
        {
            name: "Economy Umrah Package",
            price: "PKR 90,000",
            description: "Affordable Umrah package with basic amenities.",
            category: "Hajj/Umrah",
            image: "assets/Economy Umrah Package.jpg",
            details: "Includes visa, accommodation, and transport."
        },
        {
            name: "Deluxe Umrah Package",
            price: "PKR 150,000",
            description: "Comfortable Umrah with premium services.",
            category: "Hajj/Umrah",
            image: "assets/Deluxe Umrah Package.jpg",
            details: "Includes visa, 4-star hotel, and guided tours."
        },
        {
            name: "VIP Umrah Package",
            price: "PKR 250,000",
            description: "Luxury Umrah experience with exclusive facilities.",
            category: "Hajj/Umrah",
            image: "assets/VIP Umrah Package.jpg",
            details: "Includes visa, 5-star hotel, and private transport."
        },
        {
            name: "Family Hajj Package",
            price: "PKR 500,000",
            description: "Convenient Hajj package for families.",
            category: "Hajj/Umrah",
            image: "assets/Family Hajj.jpg",
            details: "Includes visa, hotel, transport, and meals."
        },
        {
            name: "Group Hajj Package",
            price: "PKR 450,000",
            description: "Affordable group Hajj package.",
            category: "Hajj/Umrah",
            image: "assets/group hajj.jpg",
            details: "Includes visa, shared accommodation, and transport."
        },
        {
            name: "VIP Hajj Package",
            price: "PKR 700,000",
            description: "Premium Hajj experience with top facilities.",
            category: "Hajj/Umrah",
            image: "assets/VIP Hajj.jpg",
            details: "Includes visa, 5-star accommodation, and luxury transport."
        },

        // Group Tours Packages
        {
            name: "Europe Group Tour",
            price: "PKR 400,000",
            description: "Explore multiple European cities with a group.",
            category: "Group Tours",
            image: "assets/Europe Group Tour.jpg",
            details: "Includes flights, hotels, and guided tours."
        },
        {
            name: "Turkey Group Tour",
            price: "PKR 180,000",
            description: "Discover the rich culture and history of Turkey.",
            category: "Group Tours",
            image: "assets/Turkey Group Tour.jpg",
            details: "Includes flights, hotels, and city tours."
        },
        {
            name: "Thailand Adventure",
            price: "PKR 150,000",
            description: "Enjoy beaches and nightlife in Thailand.",
            category: "Group Tours",
            image: "assets/Thailand Adventure.jpg",
            details: "Includes flights, hotels, and adventure activities."
        },
        {
            name: "Bali Island Getaway",
            price: "PKR 200,000",
            description: "Relax in the paradise of Bali with a group.",
            category: "Group Tours",
            image: "assets/Bali Island Getaway.jpg",
            details: "Includes flights, villas, and beach activities."
        },
        {
            name: "Pakistan Northern Areas",
            price: "PKR 50,000",
            description: "Discover the breathtaking landscapes of Pakistan.",
            category: "Group Tours",
            image: "assets/Pakistan Northern Areas.jpg",
            details: "Includes transport, hotels, and guided tours."
        },
        {
            name: "Egypt Historical Tour",
            price: "PKR 300,000",
            description: "Explore the pyramids and ancient sites of Egypt.",
            category: "Group Tours",
            image: "assets/Egypt Historical Tour.jpg",
            details: "Includes flights, hotels, and guided excursions."
        }
    ];

    function displayProducts(filteredProducts) {
        const productsGrid = $("#productsGrid");
        productsGrid.empty();
        filteredProducts.forEach(product => {
            productsGrid.append(`
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <p><strong>${product.price}</strong></p>
                        <button class="button details-button">Details</button>
                    </div>
                    <div class="details">
                        <p>${product.details}</p>
                    </div>
                </div>
            `);
        });

        $(".details-button").click(function () {
            $(this).closest(".product-card").find(".details").slideToggle();
        });
    }

    displayProducts(products);

    $(".category-filter").change(function () {
        const selectedCategory = $(".category-filter:checked").val();

        if (selectedCategory === "All") {
            displayProducts(products); 
        } else {
            const filteredProducts = products.filter(product =>
                product.category === selectedCategory
            );
            displayProducts(filteredProducts);
        }

        $(".category-filter").each(function () {
            const label = $(this).parent(); 
            if ($(this).is(":checked")) {
                label.addClass("checked");
            } else {
                label.removeClass("checked");
            }
        });
    });
});
