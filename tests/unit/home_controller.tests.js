/*describe('HomeController', function() {
  it('adds two numbers together', function () {
    expect(1 + 2).toEqual(3);
  });
});

describe('HomeController', function() {
  it('adds two numbers together', function () {
    expect(1 + 4).toEqual(5);
  });
});

describe('HomeController', function() {
  it('adds two numbers together', function () {
    expect(1 + 5).toEqual(6);
  });
});

describe('HomeController', function() {
  beforeEach(module('myApp'));

  var controller;

  beforeEach(inject(function ($rootScope, $controller, _$location_) {
    $location = _$location_;
    scope = $rootScope.$new();

    createController = $controller('PasswordController', {'$scope': scope});
  }));

  describe('$scope.grade', function() {
    it('sets the strength to "strong" if the password length is >8 chars', function() {
      scope.password = 'longerthaneightchars';
      scope.grade();
      expect(scope.strength).toEqual('strong');
      expect(scope.password).toBe('test');
      expect(scope.password).toBeDefined();
      expect(scope.password).toBeString()
    });
  });
});*/

// before each injects code before each test. Grabs fresh scopes etc. for each test.

describe('NameController', function() {
  beforeEach(module('myApp'));

  beforeEach(inject(function ($rootScope, $controller, _$location_) {
    $location = _$location_;
    scope = $rootScope.$new();

    createController = $controller('NameController', {'$scope': scope});
  }));

  it('tests getFirst', function() {

    var test = scope.getFirst()
    expect(test).toBe(scope.first);
    expect(scope.getFullName()).toBe('Joel Thomas Miller');

  });
});

describe('AssetsController', function() {
  beforeEach(module('myApp'));

  beforeEach(inject(function ($rootScope, $controller, _$location_) {
    $location = _$location_;
    scope = $rootScope.$new();

    createController = $controller('AssetsController', {'$scope': scope});
  }));

  it('checks that the statement checks out', function() {

    var string = scope.somethingCrayCray();
    var isANum = string.replace(/\D/g,'') / 100;
    expect(isANum).toBeNumber();
    //expect(isANum).toBeGreaterThan(scope.inheritance * scope.balance);
    expect(isANum).toBeGreaterThan(scope.balance + scope.inheritance);
    //expect(scope.empty).toBeNonEmptyString();
    expect(scope.baron).toBeNonEmptyString();
  });

});
