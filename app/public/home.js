
   
        $("#submit").on("click", function (event) {
            event.preventDefault();

            function validateForm() {
                var valid = true;
                $(".form-control").each(function () {
                    if ($(this).val() === "") {
                        valid = false;
                    }
                });
            return valid;
            }

                if (validateForm()) {
                    console.log("hi");
                    var userData = {
                        name: $("#name").val(),
                        photo: $("#photo").vaL(),
                        scores: [
                            $("#one").val(),
                            $("#two").val(),
                            $("#three").val(),
                            $("#four").val(),
                            $("#five").val(),
                            $("#six").val(),
                            $("#seven").val(),
                            $("#eight").val(),
                            $("#nine").val(),
                            $("#ten").val()
                        ]
                    };

                    
                    $.post("api/friends", userData, function (data) {
                        $("#match-name").text(data.name);
                        $("#match-img").attr("src",data.photo);
                        $("#results-modal").modal("toggle");
                    });
                }
                else {
                    alert("Please fill out all of the fields before submitting!");
                }
            });
        

