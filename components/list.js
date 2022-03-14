const template = document.createElement("template");
template.innerHTML=`
<style>
.list_contain{
    background-color: aliceblue;
    padding-top: 10px;
    display: flex;
    width: 365px;
    height: 70px;
    border-radius: 15px;
    margin: 10px 0;
  }
  .list_contain img{
    margin-left: 10px;
    height: 60px;
    width: 60px;
    border-radius: 5px;
  }
  .addpl img{
    padding-top: 15px;
    margin-right: 5px;
    
    height: 30px;
    width: 30px;
    cursor: pointer;
  }
  .list_contain .m_content p{
    margin: 5px 0px 10px 20px;
    width:225px;
  }
  .list_contain img{
    cursor: pointer;
  }
</style>
<div class="list_contain">
<img id ="m_img" src="" alt="">
          <div class="m_content">
            <p id="m_name"></p>
            <p id ="s_name"></p>
          </div>
          <div class="addpl">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/384009/plus-icon.png" alt="">
          </div>
        </div>
`;

class list extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({
            mode:"open",
        });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        const mi = this.shadowRoot.getElementById("m_img");
        const mn= this.shadowRoot.getElementById("m_name");
        const sn = this.shadowRoot.getElementById("s_name");
        const lc = this.shadowRoot.querySelector(".list_contain");

        lc.classList.add(this.getName());
        mi.src = this.getImg();
        mn.innerText = this.getName();
        sn.innerText = this.getSinger();
    }
    getImg(){
      return `./images/${this.getName()}.jpg`;
    }
    getName(){
      const name = this.getAttribute("name");
      switch(name){
        case "hey": return "hey";
        case "summer": return "summer";
        case "ukulele": return "ukulele";
        case "Holiday": return "Holiday";
        case "7Rings": return "7Rings";
        case "BadHabits": return "BadHabits";
        case "BuildABitch": return "BuildABitch";
        case "CureForMe": return "CureForMe";
        case "Dejavu": return "Dejavu";
        case "DojaCat": return "DojaCat";
        case "DoubleTake": return "DoubleTake";
        case "DuskTillDawn": return "DuskTillDawn";
        case "EasyOnMe": return "EasyOnMe";
        case "Happier": return "Happier";
        case "IndustryBaby": return "IndustryBaby";
        case "Inferno": return "Inferno";
        case "LikeMyFather": return "LikeMyFather";
        case "LoveMeLikeYouDo": return "LoveMeLikeYouDo";
        case "MyUniverse": return "MyUniverse";
        case "Peaches": return "Peaches";
        case "Seorita": return "Seorita";
        case "Stay": return "Stay";
        case "Symphony": return "Symphony";
        case "ThatGirl": return "ThatGirl";
        case "Toxic": return "Toxic";
        case "Unstoppable": return "Unstoppable";
        case "Wolves" : return "Wolves";
        case "YouRight": return "YouRight";
      }
    }
    getSinger(){
      switch (this.getName()) {
        case "hey": return "Kevin";
        case "summer": return "Adam";
        case "ukulele":return "Victor";
        case "Holiday":return "Scorpions";
        case "7Rings":return "ArianaGrande";
        case "BadHabits":return "EdSheeran";
        case "BuildABitch":return "BellaPoarch";
        case "CureForMe":return "AURORA";
        case "Dejavu":return "OliviaRodrigo";
        case "DojaCat":return "DojaCat";
        case "DoubleTake":return "Dhruv";
        case "DuskTillDawn":return "ZaynSia";
        case "EasyOnMe":return "Adele";
        case "Happier": return "OliviaRodrigo"
        case "IndustryBaby":return "LilNasXJackHarlow";
        case "Inferno":return "SubUrbanBellaPoarch";
        case "LikeMyFather":return "Jax";
        case "LoveMeLikeYouDo":return "EllieGoulding";
        case "MyUniverse":return "ColdplayX";
        case "Peaches":return "JustinBieber";
        case "Seorita":return "ShawnMendes";
        case "Stay":return "JustinBieber";
        case "Symphony":return "ZaraLarsson-";
        case "ThatGirl":return "OllyMurs";
        case "Toxic":return "BoyWithUke";
        case "Unstoppable":return "Sia";
        case "Wolves":return "SelenaGomez";
        case "YouRight":return "DojaCat";
      }
    }
}
 export default list;