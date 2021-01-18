window.TrelloPowerUp.initialize({
  "card-badges": function (t, opts) {
    return t.card("all").then(function (card) {
      const date1 = new Date(card.dateLastActivity);

      return [
        {
          dynamic: function () {
            const date2 = new Date();
            const diffTime = Math.abs(date2 - date1);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) - 1;

            if (diffDays <= 1) return null;

            return {
              text: diffDays + " Days",
              refresh: 80000, // in seconds
              color: diffDays > 5 ? "red" : "sky",
            };
          },
        },
        {
          dynamic: function () {
            const date2 = new Date();
            const diffTime = Math.abs(date2 - date1);
            const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) - 1;

            if (diffDays > 1 || diffHours == 1) return null;

            return {
              text: diffHours + " Hours",
              refresh: 3600, // in seconds
              color: "blue",
            };
          },
        },
        {
          dynamic: function () {
            const date2 = new Date();
            const diffTime = Math.abs(date2 - date1);
            const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
            const diffMinutes = Math.ceil(diffTime / (1000 * 60));

            if (diffHours > 1) return null;

            return {
              text: diffMinutes + " Minutes",
              refresh: 60, // in seconds
              color: "light-gray",
            };
          },
        },
      ];
    });
  },
});

// for card front badges only
