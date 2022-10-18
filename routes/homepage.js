async function homepage(req, res) {
    return res.view("/templates/base.ejs", { page: "Homepage" });
}

module.exports = homepage;