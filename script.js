document.addEventListener("DOMContentLoaded", function () {
    var imageTriggers = document.querySelectorAll(".image-trigger");
    var imagePopups = document.querySelectorAll(".image-popup");

    imageTriggers.forEach(function (trigger, index) {
        trigger.addEventListener("mouseover", function () {
            imagePopups[index].style.display = "block";
        });

        trigger.addEventListener("mouseout", function () {
            imagePopups[index].style.display = "none";
        });

        imagePopups[index].addEventListener("mouseover", function () {
            imagePopups[index].style.display = "block";
        });

        imagePopups[index].addEventListener("mouseout", function () {
            imagePopups[index].style.display = "none";
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var body = document.body;

    window.addEventListener("scroll", function () {
        var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        var newColor = interpolateColor("#ec4545", "#621b1b", scrollPercentage);
        body.style.backgroundColor = newColor;
    });

    function interpolateColor(color1, color2, percentage) {
        var color1Arr = hexToRgb(color1);
        var color2Arr = hexToRgb(color2);

        var result = color1Arr.map(function (channel, index) {
            var blendedChannel = Math.round(channel + percentage * (color2Arr[index] - channel));
            return Math.min(255, Math.max(0, blendedChannel));
        });

        return rgbToHex(result);
    }

    function hexToRgb(hex) {
        return hex.match(/\w\w/g).map(function (h) {
            return parseInt(h, 16);
        });
    }

    function rgbToHex(rgb) {
        return '#' + rgb.map(function (channel) {
            return ('0' + channel.toString(16)).slice(-2);
        }).join('');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var robertImage = document.getElementById("robertImage");
    var isOriginalImage = true;

    robertImage.addEventListener("click", function () {
        if (isOriginalImage) {
            robertImage.src = "new_robert.jpg";
        } else {
            robertImage.src = "robert.jpeg";
        }
        isOriginalImage = !isOriginalImage;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var jonieImage = document.getElementById("jonieImage");
    var isOriginalJonieImage = true;

    jonieImage.addEventListener("click", function () {
        if (isOriginalJonieImage) {
            jonieImage.src = "new_jonie.jpg";
        } else {
            jonieImage.src = "jonie.jpeg";
        }
        isOriginalJonieImage = !isOriginalJonieImage;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var chatbotBtn = document.getElementById("chatbot-btn");
    var chatbox = document.getElementById("chatbox");
    var chatContent = document.getElementById("chat-content");

    var questionsAndAnswers = {
        "What are the popular tourist spots in Shibuya?": "Popular tourist spots include Meiji Jingu Shrine, Shibuya Crossing, Hachiko statue, and Yoyogi Park.",
        "What activities can I do in Shibuya?": "Indulge in Shibuya's charm by savoring artisanal coffee, exploring hidden art spaces, and discovering quaint streets. Experience the unique side of Shibuya beyond the usual attractions!",
        "Tell me more about Shibuya's culture.": "Shibuya is a hub for fashion and youth culture, with trendy boutiques, lively streets, and a dynamic atmosphere.",
        "Who are the creators of this website?": "This website was crafted by Robert Joseph M. Eusebio and Jonie Lee Catindig.",
        "What's the upcoming event in Shibuya?": "Philippine Festival will be held on November 25-26th, so make sure to stay tuned for updates on the incoming events!"
    };

    var isTyping = false;

    chatbotBtn.addEventListener("click", function () {
        chatbox.style.display = (chatbox.style.display === "none" || chatbox.style.display === "") ? "block" : "none";
        if (chatbox.style.display === "block") {
            simulateTyping("Your loyal Maid Rem is typing...", "Hi there! How can I help you today?");
        }
    });

    function simulateTyping(message, response) {
        if (isTyping) {
            return;
        }
        isTyping = true;

        chatContent.innerHTML = "";
        var index = 0;
        var typingInterval = setInterval(function () {
            if (index <= message.length) {
                chatContent.innerHTML = message.substring(0, index);
                index++;
            } else {
                clearInterval(typingInterval);
    
                setTimeout(function () {
                    displayResponse(response);
                }, 500);
            }
        }, 100); 
    }

    function displayResponse(response) {
        isTyping = false;
        chatContent.innerHTML = response;
    }

    var chatboxButtons = document.createElement("div");
    chatboxButtons.id = "chatbox-buttons";

    for (var question in questionsAndAnswers) {
        createQuestionButton(question, questionsAndAnswers[question]);
    }

    function createQuestionButton(question, answer) {
        var questionBtn = document.createElement("button");
        questionBtn.innerText = question;
        questionBtn.addEventListener("click", function () {
            simulateTyping("Your loyal Maid Rem is typing...", answer);
        });
        chatboxButtons.appendChild(questionBtn);
    }

    chatbox.appendChild(chatboxButtons);
});
document.addEventListener("DOMContentLoaded", function () {
    var preloader = document.getElementById("preloader");

    setTimeout(function () {
        preloader.classList.add("hidden");
    }, 5000);
});
