const firebaseConfig = {
    apiKey: "AIzaSyD12jbNmNiM-ts7TYOMnRzV2mN3Chuj8Js",
    authDomain: "douglassilva-f6ded.firebaseapp.com",
    databaseURL: "https://douglassilva-f6ded-default-rtdb.firebaseio.com",
    projectId: "douglassilva-f6ded",
    storageBucket: "douglassilva-f6ded.appspot.com",
    messagingSenderId: "704030482225",
    appId: "1:704030482225:web:20a485c8672945713d1a10"
};

firebase.initializeApp(firebaseConfig);

const DB = firebase.database().ref();

function get(kin,cou,E,e) {
  var ref = DB.child(kin + cou[2]);
  
  ref.once("value", function(snap) {
    Number(snap.val()) >= cou[3] ? (E.classList.add(a),
    E.innerHTML = Y.btnNoMore,
    E.dataset.kind = "1") : (E.innerHTML = Y.btnGenerate,
    E.dataset.kind = "2",
    E.setAttribute(h, q + "('" + cou[2] + "', " + e + ");"))  
  });
}

function hit(cou,o,t,e,wh) {
  var ref = DB.child(cou);

  ref.once("value", function(snap) {
    snap.ref.set(snap.val() + 1);
    getCou(cou,o,t,e,wh);
  });
}

function getCou(cou,o,t,e,wh) {
  var ref = DB.child(cou);
  
  ref.once("value", function(snap) {
    var i = Number(snap.val()) - 1;
      if(wh) {
          if(i < Se[t][3]) {
            var r = Se[t][4][i];
            localStorage.setItem("cp"+e, r),
            o.innerHTML = r;
            for (var s, d, l = Se[t][0], u = 0; u < Le.length; u++)
                Le[u][0] === l && (s = Le[u]);
            switch (s[6]) {
            case -1:
                d = y;
                break;
            case 0:
                d = s[7];
                break;
            default:
                d = G[s[6]] + (2 === s[2] ? I : y) + s[7]
            }
            o.setAttribute(h, R + "('" + e + "', '" + d + "')")
        } else
            o.classList.remove(c),
            o.classList.add(a),
            o.innerHTML = Y.btnNoMore,
            o.dataset.kind = "1"
      } else {
        if (i < Te[t][3]) {
          var r = Te[t][4][i];
          localStorage.setItem("cpw"+e, r),
          o.innerHTML = r;
          for (var s, d = Te[t][0], l = 0; l < Be.length; l++)
              Be[l][0] === d && (s = Be[l]);
          var u = G[1] + I2 + s[3];
          o.setAttribute(h, R + "('" + e + "', '" + u + "')")
      } else
          o.classList.remove(c),
          o.classList.add(a),
          o.innerHTML = Y.btnNoMore,
          o.dataset.kind = "1"
      }
  });
}