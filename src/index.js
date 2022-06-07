"use strict";
const form = document.querySelector("form");
const textbox = document.querySelector('input[type="text"]');
const messageContainer = document.querySelector("#message-container");
const submitMessage = document.querySelector('button[type="submit"]');
const addMessage = (message) => {
    const messageElement = document.createElement("div");
    // <div class="flex w-full justify-start group hover:bg-discord-600 text-white text-sm py-2 mb-1">
    //     <div class="mx-3">
    //         <img class="rounded-full w-12" src="../assets/images/pfp.png">
    //     </div>
    //     <div class="w-11/12 flex flex-col justify-start gap-0">
    //         <div class="pr-4">
    //             <strong>SAM_SOONG</strong> <span class="text-[0.6rem] text-discord-100">Today at 19:34</span>
    //             <br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, perspiciatis est recusandae natus ea corrupti molestiae ullam ab omnis, excepturi aliquid consequuntur dolor veniam nisi odit quaerat vitae unde sapiente rerum facere incidunt neque atque soluta! Adipisci fuga commodi veritatis corporis, harum ipsa ipsum, cupiditate alias consequuntur recusandae tempore repellendus quas laboriosam expedita voluptatibus repellat ullam sapiente soluta? Explicabo veniam quae minus et quis. Iure et error fugit corrupti quo eveniet? Tempore recusandae at eum enim aut? Officiis incidunt, sequi laboriosam consequatur, nemo reprehenderit illo alias praesentium blanditiis assumenda, earum ratione molestias vel itaque adipisci quis repudiandae! Autem, provident. Illo.
    //         </div>
    //     </div>
    // <div class="relative">
    //     <button class="absolute hidden group-hover:block text-white -top-7 bg-discord-500 hover:bg-discord-300 transition-all border-[1px] border-discord-700 p-1 right-5">
    //         <div class="group-scope">
    //             <svg class="w-5 h-5 fill-red-600" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="52px" height="52px" viewBox="0 0 52 52" enable-background="new 0 0 52 52" xml:space="preserve"> <g> <path d="M45.5,10H33V6c0-2.2-1.8-4-4-4h-6c-2.2,0-4,1.8-4,4v4H6.5C5.7,10,5,10.7,5,11.5v3C5,15.3,5.7,16,6.5,16h39 c0.8,0,1.5-0.7,1.5-1.5v-3C47,10.7,46.3,10,45.5,10z M23,7c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1v3h-6V7z"/> <path d="M41.5,20h-31C9.7,20,9,20.7,9,21.5V45c0,2.8,2.2,5,5,5h24c2.8,0,5-2.2,5-5V21.5C43,20.7,42.3,20,41.5,20z M23,42c0,0.6-0.4,1-1,1h-2c-0.6,0-1-0.4-1-1V28c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1V42z M33,42c0,0.6-0.4,1-1,1h-2 c-0.6,0-1-0.4-1-1V28c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1V42z"/> </g> </svg>
    //             <div class="absolute -right-3 -top-11 bg-discord-800 p-2 scale-0 group-scope-hover:scale-100 transition-all rounded-md text-sm">delete</div>
    //         </div>
    //     </button>
    // </div>
    // </div>
    messageElement.innerHTML = `
    <div class="flex w-full group-scope justify-start hover:bg-discord-600 text-white text-sm py-2 mb-1">
        <div class="mx-3">
            <img class="rounded-full w-12" src="../assets/images/pfp.png">
        </div>
        <div class="w-11/12 flex flex-col justify-start gap-0">
            <div class="pr-4 break-words">
                <strong>${message.username}</strong> <span class="text-[0.6rem] text-discord-100">Today at ${message.time}</span>
                <br>${message.text}
            </div>
        </div>
        <div class="relative">
            <button class="absolute hidden group-scope-hover:block text-white -top-7 bg-discord-500 hover:bg-discord-300 transition-all border-[1px] border-discord-700 p-1 right-5">
                <div class="group-scope">
                    <svg class="w-5 h-5 fill-red-600" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="52px" height="52px" viewBox="0 0 52 52" enable-background="new 0 0 52 52" xml:space="preserve"> <g> <path d="M45.5,10H33V6c0-2.2-1.8-4-4-4h-6c-2.2,0-4,1.8-4,4v4H6.5C5.7,10,5,10.7,5,11.5v3C5,15.3,5.7,16,6.5,16h39 c0.8,0,1.5-0.7,1.5-1.5v-3C47,10.7,46.3,10,45.5,10z M23,7c0-0.6,0.4-1,1-1h4c0.6,0,1,0.4,1,1v3h-6V7z"/> <path d="M41.5,20h-31C9.7,20,9,20.7,9,21.5V45c0,2.8,2.2,5,5,5h24c2.8,0,5-2.2,5-5V21.5C43,20.7,42.3,20,41.5,20z M23,42c0,0.6-0.4,1-1,1h-2c-0.6,0-1-0.4-1-1V28c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1V42z M33,42c0,0.6-0.4,1-1,1h-2 c-0.6,0-1-0.4-1-1V28c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1V42z"/> </g> </svg>
                    <div class="absolute -right-3 -top-11 bg-discord-800 p-2 scale-0 group-scope-hover:scale-100 transition-all rounded-md text-sm">delete</div>
                </div>
            </button>
        </div>
    </div>
    `;
    messageContainer.appendChild(messageElement);
    messageElement.scrollIntoView({ behavior: "smooth" });
};
form.onsubmit = (event) => {
    event.preventDefault();
    const username = "SAM_SOONG";
    const text = textbox.value;
    if (text.trim() === "") {
        alert("Please enter some text");
    }
    else {
        const newTime = new Date();
        const time = `${newTime.getHours()}:${newTime.getMinutes()}`;
        const newMessage = { text, username, time };
        addMessage(newMessage);
    }
    textbox.value = "";
};
