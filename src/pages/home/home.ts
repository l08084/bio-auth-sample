import { Component } from "@angular/core";
import { TouchID } from "@ionic-native/touch-id";

@Component({
  selector: "page-home",
  template: `<ion-content padding>
              <button (click)="login()" ion-button>Login</button>
            </ion-content>`
})
export class HomePage {
  constructor(private touchId: TouchID) {}

  login() {
    // Touch ID, Face ID 対応端末かどうか確認する
    this.touchId
      .isAvailable()
      .then(
        res => console.log("TouchID is available!"),
        err => console.error("TouchID is not available", err)
      );

    // 確認ダイアログを出したあと、Touch ID, Face ID 認証を実行する
    this.touchId
      .verifyFingerprint("Scan your fingerprint please")
      .then(res => console.log("Ok", res), err => console.error("Error", err));
  }
}
