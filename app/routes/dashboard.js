const express = require('express');
const router = express.Router();
const{ issueStore } = require ('../models');


router.get('/', function(req, res) {

    const openIssues = issueStore.getAllOpen();
    const openIssuesCount = openIssues.length;
    const openIssuesHigh = openIssues.filter(e => e.severity==='High').length;
    const openIssuesMedium = openIssues.filter(e => e.severity==='Medium').length;
    const openIssuesLow = openIssues.filter(e => e.severity==='Low').length;
    
    res.render('dashboard', {
        openIssuesCount: openIssuesCount,
        openIssuesHighCount: openIssuesHigh / openIssuesCount,
        openIssuesMediumCount: openIssuesMedium / openIssuesCount,
        openIssuesLowCount: openIssuesLow / openIssuesCount
    });
});

module.exports = router;
