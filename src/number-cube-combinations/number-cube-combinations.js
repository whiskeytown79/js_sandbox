function numberCubeCombinations(facesA, facesB) {
    let nums = {};

    for (let a in facesA) {
        for (let b in facesB) {
            let num = facesA[a] * 10 + facesB[b];
            nums[num] = 1;
        }
    }

    for (let b in facesB) {
        for (let a in facesA) {
            let num = facesB[b] * 10 + facesA[a];
            nums[num] = 1;
        }
    }

    let list = [];
    for (let i=0; i<=99; i++) {
        if (!nums[i]) {
            list.push(i);
        }
    }

    return list;
}

module.exports = numberCubeCombinations;