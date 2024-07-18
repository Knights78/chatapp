const getUserDetailsFromToken = require("../helpers/getUserDetailsFromToken");

async function userDetails(request, response) {
  try {
    const token = request.cookies.token || "";
    //console.log(token,"Int the cookies")
    if (!token) {
      return response.status(401).json({
        message: "Unauthorized - No token provided",
        error: true
      });
    }

    const user = await getUserDetailsFromToken(token);
   // console.log(user)

    return response.status(200).json({
      message: "User details",
      data: user,
      success: true
    });
  } catch (error) {
    console.error('Error in userDetails function:', error);
    return response.status(500).json({
      message: error.message || error,
      error: true
    });
  }
}

module.exports = userDetails;