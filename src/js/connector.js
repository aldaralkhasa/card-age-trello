window.TrelloPowerUp.initialize({
  "card-badges": function (t, opts) {
    let cardAttachments = opts.attachments; // Trello passes you the attachments on the card

    console.log(t);
    console.log(opts);

    return t
      .card("name")
      .get("name")
      .then(function (cardName) {
        return [
          {
            dynamic: function () {
              let counter = 0;

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
