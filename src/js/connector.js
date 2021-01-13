window.TrelloPowerUp.initialize({
  "card-badges": function (t, opts) {
    let cardAttachments = opts.attachments; // Trello passes you the attachments on the card

    return t.card("all").then(function (card) {
      console.log(JSON.stringify(card, null, 2));

      let counter = 0;
      return [
        {
          dynamic: function () {
            return {
              text: "time: " + counter++,
              color: "blue",
              refresh: 10, // in seconds
            };
          },
        },
      ];
    });
  },
});

// for card front badges only
