window.TrelloPowerUp.initialize({
  "card-badges": function (t, opts) {
    let cardAttachments = opts.attachments; // Trello passes you the attachments on the card

    return t.getAll().then(function (data) {
      console.log(data);

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
