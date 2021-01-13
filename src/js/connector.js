window.TrelloPowerUp.initialize({
  "card-badges": function (t, opts) {
    let cardAttachments = opts.attachments; // Trello passes you the attachments on the card

    return t.card("all").then(function ({dateLastActivity}) {
        

      let counter = 0;
      return [
        {
          dynamic: function (dateLastActivity) {
            const date1 = new Date(dateLastActivity);
            const date2 = new Date();
          
            const diffTime = Math.abs(date2 - date1);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          
            // console.log(diffTime + " milliseconds");
            // console.log(diffDays + " days");
            return {
              text: diffDays + " days",
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
