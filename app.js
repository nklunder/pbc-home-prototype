var notifications = [
  {
    "id": 1,
    "title": "Example Title 1",
    "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  { "id": 2,
    "title": "Example Title 2",
    "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  { "id": 3,
    "title": "Example Title 3",
    "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
];

function initNotifications() {
  var notificationCount = document.getElementById("notification-count"),
      notificationList = document.getElementById("notification-list"),
      item, totalItems = 0;

  notifications.forEach(function (notification) {
    item = document.createElement("div");
    item.innerHTML = (
      "<div id='no" + notification.id + "'>" +
        "<button type='button' class='close' data-target='#no" + notification.id + "' data-dismiss='alert'>" +
          "<span aria-hidden='true'>&times;</span>" +
        "</button>" +
        "<h4>" + notification.title + "</h4>" +
        "<p>" + notification.body + "</p>" +
      "</div>"
    );

    notificationList.appendChild(item);

    totalItems++;
  });

  notificationList.addEventListener("click", function (evt) {
    if (evt.target.nodeName == "SPAN" || evt.target.nodeName == "BUTTON") {
      notificationCount.textContent = notificationCount.textContent - 1;
    }
  });

  notificationCount.textContent = totalItems;
}



initNotifications();
