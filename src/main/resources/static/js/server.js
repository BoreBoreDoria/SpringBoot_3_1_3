function reloadTable() {
    fetch('http://localhost:8080/rest/admin/').then(
        response => {
            response.json().then(
                data => {
                    let temp = "";
                    data.forEach((u) => {
                        temp += "<tr >";
                        temp += "<td >" + u.id + "</td>";
                        temp += "<td >" + u.name + "</td>";
                        temp += "<td >" + u.password + "</td>";
                        temp += "<td >" + u.age + "</td>";
                        temp += "<td >" + u.email + "</td>";
                        temp += "<td >" + u.role + "</td>"
                        temp += "<td >" +
                            "    <a class='btn btn-info' role='button' onmousedown='fillEditModal(" + u.id + ")' data-toggle='modal' data-target='#editUser'>Изменить</a>" +
                            "    <a class='btn btn-danger' role='button' onmousedown='fillDeleteModal(" + u.id + ")' data-toggle='modal' data-target='#deleteUser'>Удалить</a>" +
                            "    </td>"
                        temp += "</tr>";
                    })
                    // document.getElementById("list").innerHTML = temp;
                    $("#usersTableHere").empty();
                    $("#usersTableHere").append(temp);
                }
            )
        }
    )
}

function reloadServerTable() {
    fetch('http://localhost:8080/rest/admin/server').then(
        response => {
            response.json().then(
                data => {
                    let temp = "";
                    data.forEach((u) => {
                        temp += "<tr >";
                        temp += "<td >" + u.id + "</td>";
                        temp += "<td >" + u.inventoryNumber + "</td>";
                        temp += "<td >" + u.user.name + "</td>";
                        temp += "<td >" + u.location.location + "</td>"
                        temp += "<td >" + u.dateStart + "</td>"
                        temp += "<td >" + u.dateUseStart + "</td>"
                        temp += "<td >" + u.useValue + "</td>"
                        temp += "<td >" + u.serverStatus + "</td>"
                        temp += "<td >" +
                            "    <a class='btn btn-info' role='button' onmousedown='fillServerEditModal(" + u.id + ")' data-toggle='modal' data-target='#editServer'>Подробнее</a>" +
                            "    <a class='btn btn-danger' role='button' onmousedown='fillServerDeleteModal(" + u.id + ")' data-toggle='modal' data-target='#deleteServer'>Удалить</a>" +
                            "    </td>"
                        temp += "</tr>";
                    })
                    // document.getElementById("list").innerHTML = temp;
                    $("#serversTableHere").empty();
                    $("#serversTableHere").append(temp);
                }
            )
        }
    )
}

function fillEditModal(userId) {
    $.get("http://localhost:8080/rest/admin/" + userId, function (userJSON) {
        $('#idToEditUser').val(userJSON.id);
        $('#nameToEditUser').val(userJSON.name);
        $('#ageToEditUser').val(userJSON.age);
        $('#emailToEditUser').val(userJSON.email);
        $('#passwordToEditUser').val(userJSON.password);
        if (userJSON.role.length == 2) {
            $("#ROLE_USER").prop('checked', true);
            $("#ROLE_ADMIN").prop('checked', true);
        } else if (userJSON.role.length == 1) {
            $("#ROLE_USER").prop('checked', true);
            $("#ROLE_ADMIN").prop('checked', false);
        } else {
            $("#ROLE_USER").prop('checked', false);
            $("#ROLE_ADMIN").prop('checked', false);
        }
    });
}

function fillServerEditModal(serverId) {
    $.get("http://localhost:8080/rest/admin/server/" + serverId, function (serverJSON) {
        $('#idToEditServer').val(serverJSON.id);
        $('#inventoryNumberToEditServer').val(serverJSON.inventoryNumber);
        $('#microshemaToEditServer').val(serverJSON.microshema);
        $('#coreToEditServer').val(serverJSON.core);
        $('#coreSpeedToEditServer').val(serverJSON.coreSpeed);
        $('#maxValueEditServer').val(serverJSON.maxValue);
        $('#dateStartEditServer').val(serverJSON.dateStart);
        $('#dateUseStartEditServer').val(serverJSON.dateUseStart);
        $('#useValueEditServer').val(serverJSON.useValue);
        $('#startRepairDateEditServer').val(serverJSON.startRepairDate);
        $('#repairInfoEditServer').val(serverJSON.repairInfo);
        $('#' + serverJSON.systemType).prop('checked', true);
        $('#' + serverJSON.memoryType).prop('checked', true);
        $('#' + serverJSON.memoryValue).prop('checked', true);
        $('#' + serverJSON.serverStatus).prop('checked', true);
        $('#' + serverJSON.user.name).prop('checked', true);
        serverJSON.ports.forEach(v => {
            $('#Port_' + v.id).prop('checked', true)
        })
        serverJSON.controllers.forEach(v => $('#Controller_' + v.id).prop('checked', true))
        $('#Adres_' + serverJSON.location.id).prop('checked', true);
        localStorage.setItem(serverJSON.id, JSON.stringify(serverJSON));
    });
}

function fillDeleteModal(userId) {
    $.get("http://localhost:8080/rest/admin/" + userId, function (userJSON) {
        $('#idToDeleteUser').val(userJSON.id);
        $('#nameToDeleteUser').val(userJSON.name);
        $('#ageToDeleteUser').val(userJSON.age);
        $('#emailToDeleteUser').val(userJSON.email);
        if (userJSON.role.length == 2) {
            $("#Delete_ROLE_USER").prop('checked', true);
            $("#Delete_ROLE_ADMIN").prop('checked', true);
        } else if (userJSON.role.length == 1) {
            $("#Delete_ROLE_USER").prop('checked', true);
            $("#Delete_ROLE_ADMIN").prop('checked', false);
        } else {
            $("#Delete_ROLE_USER").prop('checked', false);
            $("#Delete_ROLE_ADMIN").prop('checked', false);
        }
    });
}

function fillServerDeleteModal(serverId) {
    $.get("http://localhost:8080/rest/admin/server/" + serverId, function (serverJSON) {
        $('#idToDeleteServer').val(serverJSON.id);
        $('#inventoryNumberToDeleteServer').val(serverJSON.inventoryNumber);
        $('#microshemaToDeleteServer').val(serverJSON.microshema);
        $('#coreToDeleteServer').val(serverJSON.core);
        $('#coreSpeedToEditServer').val(serverJSON.coreSpeed);
        $('#maxValueEditServer').val(serverJSON.maxValue);
        $('#dateStartDeleteServer').val(serverJSON.dateStart);
        $('#dateUseStartDeleteServer').val(serverJSON.dateUseStart);
        $('#useValueDeleteServer').val(serverJSON.useValue);
        $('#startRepairDateDeleteServer').val(serverJSON.startRepairDate);
        $('#repairInfoDeleteServer').val(serverJSON.repairInfo);
        $('#Delete_' + serverJSON.systemType).prop('checked', true);
        $('#Delete_' + serverJSON.memoryType).prop('checked', true);
        $('#Delete_' + serverJSON.memoryValue).prop('checked', true);
        $('#Delete_' + serverJSON.serverStatus).prop('checked', true);
        $('#Delete_' + serverJSON.user.name).prop('checked', true);
        serverJSON.ports.forEach(v => $('#DeletePort_' + v.id).prop('checked', true));
        serverJSON.controllers.forEach(v => $('#DeleteController_' + v.id).prop('checked', true));
        $('#DeleteAdres_' + serverJSON.location.id).prop('checked', true);
        localStorage.setItem(serverJSON.id, JSON.stringify(serverJSON))
    });
}

function reloadNewUserTable() {
    $('#newName').val('');
    $('#newAge').val('');
    $('#newEmail').val('');
    $('#newPassword').val('');
    $("#New_ROLE_USER").prop('checked', false);
    $("#New_ROLE_ADMIN").prop('checked', false);
}

function reloadNewServerTable() {
    $('#inventoryNumberToAddServer').val();
    $('#microshemaToAddServer').val();
    $('#coreToAddServer').val();
    $('#coreSpeedToAddServer').val();
    $('#maxValueAddServer').val();
    $('#dateStartAddServer').val();
    $('#dateUseStartAddServer').val();
    $('#useValueAddServer').val();
    $('#startRepairDateAddServer').val();
    $('#repairInfoAddServer').val();
    $($('[name = "AddSystemType"]:checked')[0]).prop('checked', false);
    $($('[name = "AddMemoryType"]:checked')[0]).prop('checked', false);
    $($('[name = "AddMemoryValue"]:checked')[0]).prop('checked', false);
    $($('[name = "AddServerStatus"]:checked')[0]).prop('checked', false);
    $($('[name = "AddlocationList"]:checked')[0]).prop('checked', false);
    $($('[name = "AddUser"]:checked')[0]).prop('checked', false);
    $('[name = "AddPortList"]:checked').each(function () {
        $(this).prop('checked', false);
    });
    $('[name = "AddControllerList"]:checked').each(function () {
        $(this).prop('checked', false);
    });
}


$(function () {
    $("#logout").append("<a class='custom-a' href='/logout'>Logout</a>");
    $('#addSubmit').on("click", function () {
        let checked = [];
        $('[name = "newRole"]:checked').each(function () {
            checked.push($(this).val());
        });

        let user = {
            name: $("#newName").val(),
            age: $("#newAge").val(),
            email: $("#newEmail").val(),
            password: $("#newPassword").val(),
            role: checked
        };
        fetch('http://localhost:8080/rest/admin/', {
            method: "POST",
            credentials: 'same-origin',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }).then(r => reloadTable());
        reloadNewUserTable();
    });
    $('#modalDeleteBtn').on("click", function () {
        fetch('http://localhost:8080/rest/admin/' + $('#idToDeleteUser').val(), {
            method: "DELETE",
            credentials: 'same-origin',
        }).then(r => reloadTable());
    });

    $('#modalDeleteServerBtn').on("click", function () {
        fetch('http://localhost:8080/rest/admin/server/' + $('#idToDeleteServer').val(), {
            method: "DELETE",
            credentials: 'same-origin',
        }).then(r => reloadServerTable());
    });

    $('#modalEditBtn').on("click", function () {
        let checked = [];
        $('[name = "editRole"]:checked').each(function () {
            checked.push($(this).val());
        });

        let user = {
            id: $('#idToEditUser').val(),
            name: $("#nameToEditUser").val(),
            age: $("#ageToEditUser").val(),
            email: $("#emailToEditUser").val(),
            password: $("#passwordToEditUser").val(),
            role: checked
        };
        fetch('http://localhost:8080/rest/admin/', {
            method: "PUT",
            credentials: 'same-origin',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }).then(r => reloadTable());
        reloadNewUserTable();
    });

    $('#modalEditServerBtn').on("click", function () {
        let userJson = {};

        userJson.id = $('#idToEditServer').val();
        userJson.inventoryNumber = $('#inventoryNumberToEditServer').val();
        userJson.microshema = $('#microshemaToEditServer').val();
        userJson.core = $('#coreToEditServer').val();
        userJson.coreSpeed = $('#coreSpeedToEditServer').val();
        userJson.maxValue = $('#maxValueEditServer').val();
        userJson.dateStart = $('#dateStartEditServer').val();
        userJson.dateUseStart = $('#dateUseStartEditServer').val();
        userJson.useValue = $('#useValueEditServer').val();
        userJson.startRepairDate = $('#startRepairDateEditServer').val();
        userJson.repairInfo = $('#repairInfoEditServer').val();
        userJson.systemType = $($('[name = "systemType"]:checked')[0]).val();
        userJson.memoryType = $($('[name = "memoryType"]:checked')[0]).val();
        userJson.memoryValue = $($('[name = "memoryValue"]:checked')[0]).val();
        userJson.serverStatus = $($('[name = "serverStatus"]:checked')[0]).val();
        userJson.location = JSON.parse($($('[name = "locationList"]:checked')[0]).val());
        userJson.user = JSON.parse($($('[name = "user"]:checked')[0]).val());
        userJson.ports = [];
        userJson.controllers = [];
        $('[name = "portList"]:checked').each(function () {
            userJson.ports.push(JSON.parse($(this).val()));
        });
        $('[name = "controllerList"]:checked').each(function () {
            userJson.controllers.push(JSON.parse($(this).val()));
        });

        console.log(userJson);

        fetch('http://localhost:8080/rest/admin/server', {
            method: "PUT",
            credentials: 'same-origin',
            body: JSON.stringify(userJson), headers: {
                'content-type': 'application/json'
            }
        }).then(r => reloadServerTable());
    });

    $('#addServerSubmit').on("click", function () {
        let userJson = {};

        userJson.inventoryNumber = $('#inventoryNumberToAddServer').val();
        userJson.microshema = $('#microshemaToAddServer').val();
        userJson.core = $('#coreToAddServer').val();
        userJson.coreSpeed = $('#coreSpeedToAddServer').val();
        userJson.maxValue = $('#maxValueAddServer').val();
        userJson.dateStart = $('#dateStartAddServer').val();
        userJson.dateUseStart = $('#dateUseStartAddServer').val();
        userJson.useValue = $('#useValueAddServer').val();
        userJson.startRepairDate = $('#startRepairDateAddServer').val();
        userJson.repairInfo = $('#repairInfoAddServer').val();
        userJson.systemType = $($('[name = "AddSystemType"]:checked')[0]).val();
        userJson.memoryType = $($('[name = "AddMemoryType"]:checked')[0]).val();
        userJson.memoryValue = $($('[name = "AddMemoryValue"]:checked')[0]).val();
        userJson.serverStatus = $($('[name = "AddServerStatus"]:checked')[0]).val();
        userJson.location = JSON.parse($($('[name = "AddLocationList"]:checked')[0]).val());
        userJson.user = JSON.parse($($('[name = "AddUser"]:checked')[0]).val());
        userJson.ports = [];
        userJson.controllers = [];
        $('[name = "AddPortList"]:checked').each(function () {
            userJson.ports.push(JSON.parse($(this).val()));
        });
        $('[name = "AddControllerList"]:checked').each(function () {
            userJson.controllers.push(JSON.parse($(this).val()));
        });

        console.log(userJson);
        fetch('http://localhost:8080/rest/admin/server', {
            method: "POST",
            credentials: 'same-origin',
            body: JSON.stringify(userJson),
            headers: {
                'content-type': 'application/json'
            }
        }).then(r => reloadServerTable());
        reloadNewServerTable();
    });
});
reloadTable();
reloadServerTable()