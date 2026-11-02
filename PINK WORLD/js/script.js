

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const messageType = document.getElementById("messageType").value;
        const message = document.getElementById("contactMessage").value.trim();

        const response =
            document.getElementById("contactMessageResponse");


        if (name.length < 2) {

            response.textContent =
                "Please enter a valid name.";

            response.className = "form-message error-message";

            return;
        }


        if (!email.includes("@") || !email.includes(".")) {

            response.textContent =
                "Please enter a valid email address.";

            response.className = "form-message error-message";

            return;
        }


        if (messageType === "") {

            response.textContent =
                "Please select a message type.";

            response.className = "form-message error-message";

            return;
        }


        if (message.length < 10) {

            response.textContent =
                "Please enter at least 10 characters in your message.";

            response.className = "form-message error-message";

            return;
        }


        response.textContent =
            "Thank you for contacting Pink World! Your message has been received.";

        response.className = "form-message success-message";

        contactForm.reset();

    });

}



const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("enquiryName").value.trim();
        const email = document.getElementById("enquiryEmail").value.trim();
        const phone = document.getElementById("enquiryPhone").value.trim();
        const enquiryType =
            document.getElementById("enquiryType").value;

        const message =
            document.getElementById("enquiryMessage").value.trim();

        const response =
            document.getElementById("enquiryResponse");


        if (name.length < 2) {

            response.textContent =
                "Please enter your full name.";

            response.className =
                "form-message error-message";

            return;
        }


        if (!email.includes("@") || !email.includes(".")) {

            response.textContent =
                "Please enter a valid email address.";

            response.className =
                "form-message error-message";

            return;
        }


        if (!/^[0-9]{10}$/.test(phone)) {

            response.textContent =
                "Please enter a valid 10-digit South African phone number.";

            response.className =
                "form-message error-message";

            return;
        }


        if (enquiryType === "") {

            response.textContent =
                "Please select an enquiry type.";

            response.className =
                "form-message error-message";

            return;
        }


        if (message.length < 10) {

            response.textContent =
                "Please provide more information about your enquiry.";

            response.className =
                "form-message error-message";

            return;
        }


        response.textContent =
    "Your enquiry is being submitted. Please wait...";

response.className =
    "form-message success-message";


enquiryForm.submit();

    });

}




const searchInput = document.getElementById("productSearch");

if (searchInput) {

    searchInput.addEventListener("keyup", function() {

        const searchTerm =
            searchInput.value.toLowerCase();

        const cards =
            document.querySelectorAll(".card");

        cards.forEach(function(card) {

            const text =
                card.textContent.toLowerCase();

            if (text.includes(searchTerm)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}




const galleryImages =
    document.querySelectorAll(".gallery-image");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxClose =
    document.getElementById("lightboxClose");


if (galleryImages.length > 0 && lightbox) {

    galleryImages.forEach(function(image) {

        image.addEventListener("click", function() {

            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;

            lightbox.classList.add("active");

        });

    });

}


if (lightboxClose) {

    lightboxClose.addEventListener("click", function() {

        lightbox.classList.remove("active");

    });

}


if (lightbox) {

    lightbox.addEventListener("click", function(event) {

        if (event.target === lightbox) {

            lightbox.classList.remove("active");

        }

    });

}




function submitFormAJAX(form) {

    const formData = new FormData(form);

    fetch(form.action, {
        method: "POST",
        body: formData
    })

    .then(function(response) {

        if (!response.ok) {

            throw new Error(
                "There was a problem submitting the form."
            );

        }

        return response.text();

    })

    .then(function() {

        alert(
            "Thank you! Your information has been submitted."
        );

        form.reset();

    })

    .catch(function(error) {

        console.error(error);

        alert(
            "Sorry, there was an error submitting the form."
        );

    });

}




document.addEventListener("DOMContentLoaded", function() {

    const themeButton =
        document.getElementById("theme-toggle");

    
    if (!themeButton) {
        return;
    }

   
    const savedTheme =
        localStorage.getItem("pinkWorldTheme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        themeButton.textContent = "☀️ Light Mode";

    } else {

        themeButton.textContent = "🌙 Dark Mode";

    }

    
    themeButton.addEventListener("click", function() {

        document.body.classList.toggle("dark-mode");

    
        if (document.body.classList.contains("dark-mode")) {

            themeButton.textContent = "☀️ Light Mode";

            localStorage.setItem("pinkWorldTheme", "dark");

        } else {

            themeButton.textContent = "🌙 Dark Mode";

            localStorage.setItem("pinkWorldTheme", "light");

        }

    });

});
