import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FooterComponent,FormsModule, HeaderComponent]
})
export class PaymentPage {
  payment = {
    card: '',
    expiry: '',
    upi: ''
  };

  constructor(private toastCtrl: ToastController) {}

  // 🔸 Handles live input sanitization for card number
  onCardInput(event: any) {
    const input = event.target?.value || '';
    // Keep only digits and restrict to 10
    const digits = input.replace(/\D/g, '').slice(0, 10);
    this.payment.card = digits;
  }

  async updatePayment() {
    const card = this.payment.card?.trim();
    const upi = this.payment.upi?.trim();

    // Validation: At least one field
    if (!card && !upi) {
      await this.showToast('⚠️ Please enter at least one payment method (Card or UPI)', 'danger');
      return;
    }

    // Validation: Card number format (10 digits only)
    if (card && !/^\d{10}$/.test(card)) {
      await this.showToast('⚠️ Card number must be exactly 10 digits.', 'warning');
      return;
    }

    await this.showToast('✅ Payment information updated successfully!', 'success');
    // You can call backend API here
  }

  private async showToast(message: string, color: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2500,
      color,
      position: 'top'
    });
    toast.present();
  }
}
