let counter = 0;

window.TrelloPowerUp.initialize({
  "card-badges": function (t, opts) {
    let cardAttachments = opts.attachments; // Trello passes you the attachments on the card
    return t
      .card("name")
      .get("name")
      .then(function (cardName) {
        console.log("We just loaded the card name for fun: " + cardName);
        return [
          {
            dynamic: function () {
              return {
                text: "Dynamic counter: " + counter++,
                color: "green",
                refresh: 10, // in seconds
              };
            },
          },
        ];
      });
  },
});

// for card front badges only
