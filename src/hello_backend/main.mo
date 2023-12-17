import Debug "mo:base/Debug";
import Text "mo:base/Text";
import Array "mo:base/Array";
import Order "mo:base/Order";
import Int "mo:base/Int";
import List "mo:base/List" ;

actor {

  type HoReKaUser = {
    id : Text;
    email : Text;
    name : Text;
  };

  type NGOUser = {
    id : Text;
    email : Text;
    name : Text;
  };

  type Food = {
    id : Text;
    name : Text;
    user : Int;
    description : Text;
    image : Text;
    quantity : Int;
    expiryDate : Text;
    isDelivered : Bool;
    pickedUpBy : Text;
    fromLocation : Text;
    toLocation : Text;
  };

  stable var horekaCount = 0;
  stable var ngoCount = 0;
  stable var foodCount = 0;

  stable var horekausers: List.List<HoReKaUser> = List.nil<HoReKaUser>();
  stable var ngousers: List.List<NGOUser> = List.nil<NGOUser>();
  stable var food: List.List<Food> = List.nil<Food>();

  public func addHoReKaUser(emailI : Text, nameI : Text) {
    horekaCount := horekaCount + 1;
    var horekauser : HoReKaUser ={

      id = Int.toText(horekaCount);
      name = nameI ;
      email = emailI ;

    };
    horekausers := List.push(horekauser, horekausers);
    Debug.print(debug_show (horekausers))
  };

  public func addNGOUser(emailI : Text, nameI : Text) {
    ngoCount := ngoCount + 1;
    var ngouser : NGOUser ={

      id = Int.toText(ngoCount);
      name = nameI ;
      email = emailI ;

    };
    ngousers := List.push(ngouser, ngousers);
    Debug.print(debug_show (ngousers))
  };

  func compareHoReKaByEmail(a : HoReKaUser, b : HoReKaUser) : Order.Order {
    return Text.compare(a.email, b.email)
  };

  func compareNGOByEmail(a : NGOUser, b : NGOUser) : Order.Order {
    return Text.compare(a.email, b.email)
  };

  public shared (msg) func whoami() : async Principal {
        msg.caller
  };

  public query func getHoReKaUsers() : async [HoReKaUser] {
    return List.toArray(horekausers);
  };

  public query func getNGOUsers() : async [NGOUser] {
    return List.toArray(ngousers);
  };





}