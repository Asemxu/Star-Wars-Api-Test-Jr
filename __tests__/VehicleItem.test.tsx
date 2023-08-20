import VehicleItem from '@/app/components/pages/home/vehicleItem';
import { render, screen } from '@testing-library/react';
import Vehicle from '@/app/interfaces/vehicle';
describe('VehicleItem', () => {
  describe('Text', () => {
    const vehicleItemTest : Vehicle = {
      name : "Vehicle Test"
    }
    it('Get render vehicle item ClassName' , () => {
      render(
        <VehicleItem  vehicle={vehicleItemTest}/>
      )
      expect(screen.getByText('Vehicle Test')).toBeInTheDocument()
    })
    it('Get vehicle item class' , () => {
      render(
        <VehicleItem vehicle={vehicleItemTest} />
      )
      const vehicleItemElement = document.querySelector("li") as HTMLElement;
      expect(vehicleItemElement.className).toContain("vehicles-item")
      expect(vehicleItemElement).toBeInTheDocument()
    })
    it('Exsist Vehicle Item' , () => {
      render(
        <VehicleItem vehicle={vehicleItemTest} />
      )
      const vehicleItemElement = document.querySelector('li') as HTMLElement
      expect(vehicleItemElement).toBeInTheDocument()
    })
    it('Get is not vehicle name' , () => {
      render(
        <VehicleItem vehicle={vehicleItemTest} />
      )
      expect(screen.queryByText('Nuevo Vehicle')).not.toBeInTheDocument()
    })
    it(" If there h2 element" , () => {
      render(
        <VehicleItem vehicle={vehicleItemTest} />
      )
      const h2Element = document.querySelector('h2') as HTMLElement
      expect(h2Element).toBeTruthy()
    })
  })
})