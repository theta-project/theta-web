async function homepage(req, res) {
    return res.view("/templates/base.ejs", { page: "Leaderboard" });
}

module.exports = homepage;