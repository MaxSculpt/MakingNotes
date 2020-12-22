const canvas = document.getElementById('canvas1');
const ctx1 = canvas.getContext('2d');
canvas.wigth = 600;
canvas.height = 600;

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas.getContext('2d');
canvas.wigth = 600;
canvas.height = 600;

const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas.getContext('2d');
canvas.wigth = 600;
canvas.height = 600;

const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas.getContext('2d');
canvas.wigth = 600;
canvas.height = 600;

const canvas5 = document.getElementById('canvas5');
const ctx5 = canvas.getContext('2d');
canvas.wigth = 600;
canvas.height = 600;

// global variables
const grid = 80;
let keys = [];
let score = 0;
let collisions = 0;
let frame = 0;
let gameSpeed = 1;

const particlesArray = [];
const maxParticles = 300;
const ripplesArray = [];
const carsArray = [];
const logsArray = [];

// images
const background_lvl2 = new Image();
background_lvl2.src = '../img/background_lvl2.png';

const grass = new Image();
grass.src = '../img/grass.png';