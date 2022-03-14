const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');

// Song titles
const songs = [
'hey', 
'summer',
'ukulele',
"7Rings",
"BadHabits",
"BuildABitch",
'CureForMe',
'Dejavu',
"DojaCat",
"DoubleTake",
"DuskTillDawn",
"EasyOnMe",
"Happier",
"IndustryBaby",
"Inferno",
"LikeMyFather",
"LoveMeLikeYouDo",
"MyUniverse",
"Peaches",
"Seorita",
"Stay",
"Symphony",
"ThatGirl",
"Toxic",
"Unstoppable",
"Wolves",
"YouRight"
];

// Keep track of song
let songIndex = 2;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
	title.innerText = song;
	audio.src = `music/${song}.mp3`;
	cover.src = `images/${song}.jpg`;
}

// Play song
function playSong() {
	musicContainer.classList.add('play');
	playBtn.querySelector('i.fas').classList.remove('fa-play');
	playBtn.querySelector('i.fas').classList.add('fa-pause');

	audio.play();
}

// Pause song
function pauseSong() {
	musicContainer.classList.remove('play');
	playBtn.querySelector('i.fas').classList.add('fa-play');
	playBtn.querySelector('i.fas').classList.remove('fa-pause');

	audio.pause();
}

// Previous song
function prevSong() {
	songIndex--;

	if (songIndex < 0) {
		songIndex = songs.length - 1;
	}

	loadSong(songs[songIndex]);

	playSong();
}

// Next song
function nextSong() {
	songIndex++;

	if (songIndex > songs.length - 1) {
		songIndex = 0;
	}

	loadSong(songs[songIndex]);

	playSong();
}

// Update progress bar
function updateProgress(e) {
	const { duration, currentTime } = e.srcElement;
	const progressPercent = (currentTime / duration) * 100;
	progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
	const width = this.clientWidth;
	const clickX = e.offsetX;
	const duration = audio.duration;

	audio.currentTime = (clickX / width) * duration;
}

//get duration & currentTime for Time of song
function DurTime(e) {
	const { duration, currentTime } = e.srcElement;
	var sec;
	var sec_d;

	// define minutes currentTime
	let min = (currentTime == null) ? 0 :
		Math.floor(currentTime / 60);
	min = min < 10 ? '0' + min : min;

	// define seconds currentTime
	function get_sec(x) {
		if (Math.floor(x) >= 60) {

			for (var i = 1; i <= 60; i++) {
				if (Math.floor(x) >= (60 * i) && Math.floor(x) < (60 * (i + 1))) {
					sec = Math.floor(x) - (60 * i);
					sec = sec < 10 ? '0' + sec : sec;
				}
			}
		} else {
			sec = Math.floor(x);
			sec = sec < 10 ? '0' + sec : sec;
		}
	}

	get_sec(currentTime, sec);

	// change currentTime DOM
	currTime.innerHTML = min + ':' + sec;

	// define minutes duration
	let min_d = (isNaN(duration) === true) ? '0' :
		Math.floor(duration / 60);
	min_d = min_d < 10 ? '0' + min_d : min_d;


	function get_sec_d(x) {
		if (Math.floor(x) >= 60) {

			for (var i = 1; i <= 60; i++) {
				if (Math.floor(x) >= (60 * i) && Math.floor(x) < (60 * (i + 1))) {
					sec_d = Math.floor(x) - (60 * i);
					sec_d = sec_d < 10 ? '0' + sec_d : sec_d;
				}
			}
		} else {
			sec_d = (isNaN(duration) === true) ? '0' :
				Math.floor(x);
			sec_d = sec_d < 10 ? '0' + sec_d : sec_d;
		}
	}

	// define seconds duration

	get_sec_d(duration);

	// change duration DOM
	durTime.innerHTML = min_d + ':' + sec_d;

};

// Event listeners
playBtn.addEventListener('click', () => {
	const isPlaying = musicContainer.classList.contains('play');

	if (isPlaying) {
		pauseSong();
	} else {
		playSong();
	}
});

// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);

// Time of song
audio.addEventListener('timeupdate', DurTime);



// sign in, sign up setup
let psi = document.getElementById("signin");
let psu = document.getElementById("signup");
let mdi = document.getElementById("md_si");
let mdu = document.getElementById("md_su");

psi.onclick = function () {
	mdi.style.display = "block";
}
psu.onclick = function () {
	mdu.style.display = "block";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == mdi || event.target == mdu) {
		mdi.style.display = "none";
		mdu.style.display = "none";
	}
}

// selected songs
let pcm = document.getElementById("pc");
let points = [...document.getElementsByClassName("music")];
points.forEach((music) => {
	music.addEventListener("click", () => {
		pcm.style.display = "block";
		loadSong(music.getAttribute("Name"));
		playSong();
	})
})

// xử lý đăng nhập
let singin = document.getElementById("signin");
let signup = document.getElementById("signup");
let after_si = document.getElementById("after_si");

function checkAccount(string) {
	db.collection("users").get().then((snap) => {
		snap.docs.forEach((doc) => {
			let data = doc.data();
			if (data.uname == string) return true;
			return false;
		})
	});
}
let submitSignIn = document.getElementById("si");

submitSignIn.addEventListener("click", (e) => {
	e.preventDefault();
	let signInName = document.getElementById("name_si");
	let signInPass = document.getElementById("pass_si");
	let fl = 0;
	db.collection("users").get().then((snap) => {
		snap.docs.forEach((doc) => {
			let data = doc.data();
			if (signInName.value == data.uname) {
				if (signInPass.value == data.pass) {
					alert("Đăng nhập thành công");
					mdi.style.display = "none";
					singin.style.display = "none";
					signup.style.display = "none";
					after_si.style.display = "block";
					fl = 1;
					return;
				}
				else alert("Mật khẩu không đúng");
			}
		})
		if (fl == 0) alert("Tài khoản không tồn tại");
	})
});

// xử lý đăng ký
let submitSignUp = document.getElementById("su");

submitSignUp.addEventListener("click", (e) => {
	e.preventDefault();
	let signUpName = document.getElementById("name_su");
	let signUpPass = document.getElementById("pass_su");
	let signReUpPass = document.getElementById("re_pass");

	if (signUpPass.value == signReUpPass.value) {
		db.collection("users").doc().set({
			uname: signUpName.value,
			pass: signUpPass.value,
		})
		alert("Tạo tài khoản thành công");
		mdu.style.display = "none";
		singin.style.display = "none";
		signup.style.display = "none";
		after_si.style.display = "block";
	}
	else alert("Mật khẩu không đúng");
})