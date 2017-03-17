
      // init
      var input = document.getElementById("input");
      var btnAdd = document.getElementById("btn_add");
      var btnRemove = document.getElementById("btn_remove");
      var parent = document.getElementById("todo_items_wrap");
      var childNodeArray = parent.children;
      var childGlobal = document.getElementsByTagName("p");
      

      // adding
      btnAdd.onclick = function() {
        input.focus();
        if (input.value.length > 0) {
          appendElement();
          clickChildElement();
        } else {
          alert('Please, add list name!');
        }
      }


      // removing elements
      btnRemove.onclick = function() {
        var childActive = document.getElementsByClassName("active");
        while(childActive.length > 0){
          childActive[0].parentNode.removeChild(childActive[0]);
        }
      }


      function appendElement() {
        var child = document.createElement("p");
        child.innerHTML = input.value;
        parent.append(child);
      }


      function clickChildElement() {
        for(var i = 0; i < childNodeArray.length; i++){
          childNodeArray[i].onclick = function () {
            this.classList.toggle("active");
          };
        }
      }
