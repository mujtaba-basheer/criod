exports.addMeme = async (req, res, db) => {
  const data = req.body;
  try {
    console.log("add");
    await db.collection("memes").insertOne(data);
    res.status(200).json({
      status: true,
      message: "Meme added successfully.",
    });
  } catch (error) {
    console.error(error);
    res.status(503).json({
      status: false,
      message: "Error adding meme.",
    });
  }
};

exports.fetchMemes = async (req, res, db) => {
  try {
    console.log("fetch");
    const memes = await db.collection("memes").find().limit(100).toArray();
    res.status(200).json({
      status: true,
      message: "Memes fetched successfully.",
      data: memes,
    });
  } catch (error) {
    console.error(error);
    res.status(503).json({
      status: false,
      message: "Error fetching memes.",
    });
  }
};
