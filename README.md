Job Application Tracker - My Project
আসসালামু আলাইকুম, এটি আমার একটি ছোট প্রজেক্ট। এখানে আমি জাভাস্ক্রিপ্ট দিয়ে জব কার্ড ডিলিট করা এবং স্ট্যাটাস চেঞ্জ করা শিখেছি। নিচে কিছু প্রশ্নের উত্তর দেওয়া হলো যা আমি এই প্রজেক্ট করতে গিয়ে শিখেছি।

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById: এটা দিয়ে শুধু একটা নির্দিষ্ট ID ধরা যায়। যেমন: document.getElementById('total')।

getElementsByClassName: এটা দিয়ে একই নামের অনেকগুলো ক্লাসকে একসাথে ধরা যায়। এটা একটা লিস্টের মতো রেজাল্ট দেয়।

querySelector: এটা অনেক পাওয়ারফুল। আইডি হলে # আর ক্লাস হলে . দিয়ে CSS এর মতো করে এলিমেন্ট ধরা যায়। আর querySelectorAll দিলে সবগুলা এলিমেন্ট একসাথে পাওয়া যায়।

2. How do you create and insert a new element into the DOM?
প্রথমে document.createElement() দিয়ে এলিমেন্ট বানাব। তারপর সেটাকে appendChild() দিয়ে পেজের কোনো একটা ডিভ বা বডির ভেতর ঢুকিয়ে দিতে হয়। মাঝখানে চাইলে innerText দিয়ে কিছু লেখাও যোগ করা যায়।

3. What is Event Bubbling? And how does it work?
ইভেন্ট বাবলিং মানে হলো— কোনো একটা চাইল্ড এলিমেন্টে (যেমন বাটন) ক্লিক করলে সেই ক্লিকটা বাবল বা বুদবুদের মতো উপরের দিকে উঠতে থাকে। মানে বাটনের ক্লিকটা তার প্যারেন্ট ডিভ এবং তারপর বডি পর্যন্ত পৌঁছে যায়।

4. What is Event Delegation in JavaScript? Why is it useful?
সবগুলা আলাদা আলাদা এলিমেন্টে ক্লিক ইভেন্ট না বসিয়ে যদি তাদের মেইন প্যারেন্ট এলিমেন্টে একটা ইভেন্ট বসানো হয়, তবে তাকেই ইভেন্ট ডেলিগেশন বলে। এটা দরকার কারণ— এতে কোড কম লিখতে হয় আর নতুন কোনো আইটেম যোগ করলে সেটাতেও ক্লিক কাজ করে।

5. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault: এটা কোনো জিনিসের আসল কাজ থামিয়ে দেয়। যেমন একটা লিংকে ক্লিক করলে যেন অন্য পেজে না যায়।

stopPropagation: এটা ইভেন্ট বাবলিং থামায়। মানে ক্লিকটা যেন তার উপরে থাকা প্যারেন্ট এলিমেন্ট পর্যন্ত না পৌঁছায়।