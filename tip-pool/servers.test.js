describe('Servers test (with setup and tear-down)', function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server with an empty input on submitServerInfo()', function () {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should update on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();
    let currentTdList = document.querySelectorAll('#serverTable tbody tr td');
    expect(currentTdList.length).toEqual(2);
    expect(currentTdList[0].innerText).toEqual('Alice');
    expect(currentTdList[1].innerText).toEqual('$0.00');
  });

  afterEach(function () {
    serverId = 0;
    allServers = {};
    serverTbody.innerHTML = '';
  });
});
