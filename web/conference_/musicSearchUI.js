(function () {
  var app = new Vue({
    el: "#app",
    data: {
      view: "search",
      sound: {
        playing: false,
        file: null,
      },
      search: "",
      results: null,
    },
    methods: {
      playSong: function (data) {
        this.sound.file = "453452";
        this.sound.playing = true;
      },
      searchResultss: function () {
        let x = this.search.split(" ").join("+");
        this.$http
          .get(
            "https://www.youtube.com/results?filters=video&lclk=video&search_query=" +
              x
          )
          .then(
            (response) => {
              // get body data
              this.results = response.body;
              console.log(this.results);
            },
            (response) => {
              // error callback
            }
          );
      },
      setPage: function (page) {
        this.view = page;
      },
    },
    computed: {
      searchResults: function () {
        let isResults = false;
        if (this.search.length > 6) isResults = true;
        return isResults;
      },
    },
    mounted() {},
  });
})();
