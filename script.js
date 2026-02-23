
let currentTab = 'All';

// Dashboard এর কাউন্ট আপডেট
function updateDashboard() {
    let allCards = document.getElementsByClassName('job-card');
    
    let total = allCards.length;
    let interviewCount = 0;
    let rejectedCount = 0;

    for (let i = 0; i < allCards.length; i++) {
        const card = allCards[i];
        const status = card.getAttribute('data-status');

        if (status === 'Interview') {
            interviewCount = interviewCount + 1; 
        } else if (status === 'Rejected') {
            rejectedCount = rejectedCount + 1;
        }
    }

   
    document.getElementById('total-count').innerText = total;
    document.getElementById('interview-count').innerText = interviewCount;
    document.getElementById('rejected-count').innerText = rejectedCount;
}


function setStatus(button, newStatus) {
    const card = button.parentElement.parentElement;
    card.setAttribute('data-status', newStatus);
    
    const label = card.querySelector('.status-label');
    label.innerText = newStatus;

    
    if (newStatus === 'Interview') {
        label.className = "status-label bg-emerald-50 text-emerald-700 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider";
    } else {
        label.className = "status-label bg-red-50 text-red-700 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider";
    }

    updateDashboard();
    filterJobs(currentTab); 
}

// Card delete kora
function deleteCard(button) {
    const el = button.parentElement;
    el.remove();
    updateDashboard();
    filterJobs(currentTab);
}

// Tab wise filter kora ebong active button color change
function filterJobs(tabName) {
    currentTab = tabName; 
    const cards = document.getElementsByClassName('job-card');
    const msg = document.getElementById('no-jobs-msg');
    let count = 0;

    // Active Tab color update
    const allButtons = document.getElementsByClassName('tab-btn');
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove('bg-blue-600', 'text-white');
        allButtons[i].classList.add('bg-white', 'text-gray-500', 'border');
        
        if (allButtons[i].innerText === tabName) {
            allButtons[i].classList.add('bg-blue-600', 'text-white');
            allButtons[i].classList.remove('bg-white', 'text-gray-500');
        }
    }

 
    for (let i = 0; i < cards.length; i++) {
        const item = cards[i];
        const currentStatus = item.getAttribute('data-status');

        if (tabName === 'All' || currentStatus === tabName) {
            item.style.display = 'block';
            count = count + 1;
        } else {
            item.style.display = 'none';
        }
    }

    document.getElementById('list-count').innerText = count;

   
    if (count === 0) {
        msg.classList.remove('hidden');
    } else {
        msg.classList.add('hidden');
    }
}


updateDashboard();
filterJobs('All');