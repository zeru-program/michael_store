const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");


navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

const ch_t = document.getElementById('chTxt');
const box_1 = document.getElementById('box1');
const box_2 = document.getElementById('box2');

function chFf() {
  ch_t.innerHTML = '<p id="chTxt">Product "Free fire"</p>';
  box_1.innerHTML = `<div id="box-ff">
                <div id="box1" class="box-1">
                    <a href="#" class="box">
                        <div>
                            <img src="i.png" class="img-box-p" alt="gbr" />
                            <br />
                            <label class="dbox">Sg repeer alok</label>
                            <label class="dbox harga">Rp.200.000</label>
                        </div>
                    </a>
                    <a href="#" class="box">
                        <div>
                            <img src="i.png" class="img-box-p" alt="gbr" />
                            <br />
                            <label class="dbox">awm epep</label>
                            <label class="dbox harga">Rp.200.000</label>
                        </div>
                    </a>
                    <a href="#" class="box">
                        <div>
                            <img src="i.png" class="img-box-p" alt="gbr" />
                            <br />
                            <label class="dbox">skil Alok unlimited skin s2 ak dragon</label>
                            <label class="dbox harga">Rp.200.000</label>
                        </div>
                    </a>
                    <a href="#" class="box">
                        <div>
                            <img src="i.png" class="img-box-p" alt="gbr" />
                            <br />
                            <label class="dbox">Sg repeer alok</label>
                            <label class="dbox harga">Rp.200.000</label>
                        </div>
                    </a>
                    <a href="#" class="box">
                        <div>
                            <img src="i.png" class="img-box-p" alt="gbr" />
                            <br />
                            <label class="dbox">Sg apa coba</label>
                            <label class="dbox harga">Rp.200.000</label>
                        </div>
                    </a>
                    <a href="#" class="box">
                        <div>
                            <img src="i.png" class="img-box-p" alt="gbr" />
                            <br />
                            <label class="dbox">Sg repeer alok</label>
                            <label class="dbox harga">Rp.200.000</label>
                        </div>
                    </a>
                    <a href="#" class="box">
                        <div>
                            <img src="i.png" class="img-box-p" alt="gbr" />
                            <br />
                            <label class="dbox">Sg repeer alok</label>
                            <label class="dbox harga">Rp.200.000</label>
                        </div>
                    </a>
                    <a href="#" class="box">
                        <div>
                            <img src="i.png" class="img-box-p" alt="gbr" />
                            <br />
                            <label class="dbox">Sg repeer alok</label>
                            <label class="dbox harga">Rp.200.000</label>
                        </div>
                    </a>
                    <a href="#" class="box">
                        <div>
                            <img src="i.png" class="img-box-p" alt="gbr" />
                            <br />
                            <label class="dbox">Sg repeer alok</label>
                            <label class="dbox harga">Rp.200.000</label>
                        </div>
                    </a>
                    <div class="btn-next">
                    <button type="button" onclick="backFf()">back</button>
                    <button type="button" onclick="nextFf()">next</button>
                </div>
                </div>
            </div>`;
}
function chRb() {
  ch_t.innerHTML = '<p id="chTxt">Product "Roblox"</p>';
  box_1.innerHTML = `<div id="box-rb">
                <div id="box1" class="box-1">
                    <a href="#" class="box">
                        <div>
                            <img src="i.png" class="img-box-p" alt="gbr" />
                            <br />
                            <label class="dbox">Sg repeer alok</label>
                            <label class="dbox harga">Rp.200.000</label>
                        </div>
                    </a>
                    <a href="#" class="box">
                        <div>
                            <img src="i.png" class="img-box-p" alt="gbr" />
                            <br />
                            <label class="dbox">akun sultan roblox</label>
                            <label class="dbox harga">Rp.200.000</label>
                        </div>
                    </a>
                    <a href="#" class="box">
                        <div>
                            <img src="i.png" class="img-box-p" alt="gbr" />
                            <br />
                            <label class="dbox">Akun mid roblok</label>
                            <label class="dbox harga">Rp.200.000</label>
                        </div>
                    </a>
                    <a href="#" class="box">
                        <div>
                            <img src="i.png" class="img-box-p" alt="gbr" />
                            <br />
                            <label class="dbox"> Akun mod</label>
                            <label class="dbox harga">Rp.200.000</label>
                        </div>
                    </a>
                </div>
            </div>`;
}
function chMl() {
  ch_t.innerHTML = '<p id="chTxt">Product "Mobile legends"</p>';
  box_1.innerHTML = `<div id="box-ml">
                <div id="box1" class="box-1">
                    <a href="#" class="box">
                        <div>
                            <img src="i.png" class="img-box-p" alt="gbr" />
                            <br />
                            <label class="dbox">Akun epik skin 5 colector</label>
                            <label class="dbox harga">Rp.200.000</label>
                        </div>
                    </a>
                    <a href="#" class="box">
                        <div>
                            <img src="i.png" class="img-box-p" alt="gbr" />
                            <br />
                            <label class="dbox">akun sultan epik 5 aspirant 2</label>
                            <label class="dbox harga">Rp.200.000</label>
                        </div>
                    </a>
                    <a href="#" class="box">
                        <div>
                            <img src="i.png" class="img-box-p" alt="gbr" />
                            <br />
                            <label class="dbox">20 skin basic</label>
                            <label class="dbox harga">Rp.20.000</label>
                        </div>
                    </a>
                    <a href="#" class="box">
                        <div>
                            <img src="i.png" class="img-box-p" alt="gbr" />
                            <br />
                            <label class="dbox"> Akun polosan</label>
                            <label class="dbox harga">Rp.100.000</label>
                        </div>
                    </a>
                </div>
            </div>`;
}

function backFf() {
  box_1.innerHTML = `<div id="box-ff">
                <div id="box1" class="box-1">
                    <a href="#" class="box">
                        <div>
                            <img src="i.png" class="img-box-p" alt="gbr" />
                            <br />
                            <label class="dbox">Sg repeer alok</label>
                            <label class="dbox harga">Rp.200.000</label>
                        </div>
                    </a>
                    <a href="#" class="box">
                        <div>
                            <img src="i.png" class="img-box-p" alt="gbr" />
                            <br />
                            <label class="dbox">awm epep</label>
                            <label class="dbox harga">Rp.200.000</label>
                        </div>
                    </a>
                    <a href="#" class="box">
                        <div>
                            <img src="i.png" class="img-box-p" alt="gbr" />
                            <br />
                            <label class="dbox">skil Alok unlimited skin s2 ak dragon</label>
                            <label class="dbox harga">Rp.200.000</label>
                        </div>
                    </a>
                    <a href="#" class="box">
                        <div>
                            <img src="i.png" class="img-box-p" alt="gbr" />
                            <br />
                            <label class="dbox">Sg repeer alok</label>
                            <label class="dbox harga">Rp.200.000</label>
                        </div>
                    </a>
                    <a href="#" class="box">
                        <div>
                            <img src="i.png" class="img-box-p" alt="gbr" />
                            <br />
                            <label class="dbox">Sg apa coba</label>
                            <label class="dbox harga">Rp.200.000</label>
                        </div>
                    </a>
                    <a href="#" class="box">
                        <div>
                            <img src="i.png" class="img-box-p" alt="gbr" />
                            <br />
                            <label class="dbox">Sg repeer alok</label>
                            <label class="dbox harga">Rp.200.000</label>
                        </div>
                    </a>
                    <a href="#" class="box">
                        <div>
                            <img src="i.png" class="img-box-p" alt="gbr" />
                            <br />
                            <label class="dbox">Sg repeer alok</label>
                            <label class="dbox harga">Rp.200.000</label>
                        </div>
                    </a>
                    <a href="#" class="box">
                        <div>
                            <img src="i.png" class="img-box-p" alt="gbr" />
                            <br />
                            <label class="dbox">Sg repeer alok</label>
                            <label class="dbox harga">Rp.200.000</label>
                        </div>
                    </a>
                    <a href="#" class="box">
                        <div>
                            <img src="i.png" class="img-box-p" alt="gbr" />
                            <br />
                            <label class="dbox">Sg repeer alok</label>
                            <label class="dbox harga">Rp.200.000</label>
                        </div>
                    </a>
                    <div class="btn-next">
                    <button type="button" onclick="backFf()">back</button>
                    <button type="button" onclick="nextFf()">next</button>
                </div>
                </div>
            </div>`;
}
function nextFf() {
  box_1.innerHTML = `<div id="box2" class="box-2">
                    <a href="#" class="box">
                        <div>
                            <img src="i.png" class="img-box-p" alt="gbr" />
                            <br />
                            <label class="dbox">martabak</label>
                            <label class="dbox harga">Rp.200.000</label>
                        </div>
                    </a>
                    <a href="#" class="box">
                        <div>
                            <img src="i.png" class="img-box-p" alt="gbr" />
                            <br />
                            <label class="dbox">Sg repeer alok</label>
                            <label class="dbox harga">Rp.200.000</label>
                        </div>
                    </a>
                    <a href="#" class="box">
                        <div>
                            <img src="i.png" class="img-box-p" alt="gbr" />
                            <br />
                            <label class="dbox">Sg repeer alok</label>
                            <label class="dbox harga">Rp.200.000</label>
                        </div>
                    </a>
                    <a href="#" class="box">
                        <div>
                            <img src="i.png" class="img-box-p" alt="gbr" />
                            <br />
                            <label class="dbox">Sg repeer alok</label>
                            <label class="dbox harga">Rp.200.000</label>
                        </div>
                    </a>
                    <a href="#" class="box">
                        <div>
                            <img src="i.png" class="img-box-p" alt="gbr" />
                            <br />
                            <label class="dbox">Sg repeer alok</label>
                            <label class="dbox harga">Rp.200.000</label>
                        </div>
                    </a>
                    <a href="#" class="box">
                        <div>
                            <img src="i.png" class="img-box-p" alt="gbr" />
                            <br />
                            <label class="dbox">Sg repeer alok</label>
                            <label class="dbox harga">Rp.200.000</label>
                        </div>
                    </a>
                    <a href="#" class="box">
                        <div>
                            <img src="i.png" class="img-box-p" alt="gbr" />
                            <br />
                            <label class="dbox">Sg repeer alok</label>
                            <label class="dbox harga">Rp.200.000</label>
                        </div>
                    </a>
                    <a href="#" class="box">
                        <div>
                            <img src="i.png" class="img-box-p" alt="gbr" />
                            <br />
                            <label class="dbox">Sg repeer alok</label>
                            <label class="dbox harga">Rp.200.000</label>
                        </div>
                    </a>
                    <a href="#" class="box">
                        <div>
                            <img src="i.png" class="img-box-p" alt="gbr" />
                            <br />
                            <label class="dbox">Sg repeer alok</label>
                            <label class="dbox harga">Rp.200.000</label>
                        </div>
                    </a>
                    <div class="btn-next">
                    <button type="button" onclick="backFf()">back</button>
                    <button type="button" onclick="nextFf()">next</button>
                </div>
                </div>`;
}
