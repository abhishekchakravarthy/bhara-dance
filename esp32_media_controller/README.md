# ESP32 Media Controller (Li-ion, USB-C, Integrated)

This project contains a production-grade schematic for a portable ESP32 media controller with:
- ESP32-WROOM-32E module
- USB-C device port
- Battery charger with power-path (TI BQ24074)
- 3.3 V buck-boost regulator (TI TPS63020)
- Onboard Li-ion protection (DW01A + FS8205A)
- CP2102N USB-UART with auto-program/reset
- 7 push buttons (GPIO 16, 17, 18, 19, 21, 22, 23 to GND)

Assumptions:
- Board: 2-layer, 1 oz copper, JLCPCB Standard service
- Outline: 70 mm x 40 mm (USB-C on short edge, ESP32 antenna at the opposite edge)
- Battery: 1S Li-ion cell connected via JST-PH-2
- If using protected battery packs, the onboard protection can be DNP

## Files
- `schematic/esp32_media_controller.kicad_sch` — KiCad 8 schematic
- `esp32_media_controller.kicad_pro` — KiCad 8 project file
- `fabrication/BOM.csv` — Bill of Materials (primary parts)

## How to build
1. Open the project in KiCad 8.
2. Review the schematic and ERC.
3. Assign footprints (most are pre-assigned using standard KiCad libs). Update to your preferred library variants if needed.
4. Proceed to PCB layout (place USB-C at board edge, keep ESP32 antenna edge free of copper/components for ~15 mm).
5. Run DRC; then plot Gerbers and generate drill files.

## Notes
- USB-C: CC1/CC2 have 5.1 kΩ Rd to GND. D+/D− go to CP2102N with ESD protection and optional 27 Ω series.
- Charging: BQ24074 handles input current limiting and ideal-diode power-path to system (`SYS`) and battery (`BAT`). NTC (10 kΩ @25 °C) supported.
- Regulation: TPS63020 generates stable 3.3 V across full battery/USB range. Size the inductor and capacitors per datasheet.
- Auto-reset: CP2102N DTR/RTS through NPN pair to pull EN and IO0.
- Buttons: Firmware should enable internal pull-ups. Optional 100 nF to GND per key for debounce.

## Buttons connector (sealed) and pinout
- Connector: `J3` JST JWPF 10-pin, sealed/locking (bike-friendly). Mating harness recommended.
- Protection: Per-button RC (1 kΩ series + 100 nF to GND) and shared ESD array on the bundle.

Pinout order:
1: GND
2: GPIO16 (Vol Up)
3: GPIO17 (Vol Down)
4: GPIO18 (Prev)
5: GPIO19 (Next)
6: GPIO21 (Play/Pause)
7: GPIO22 (Power)
8: GPIO23 (Voice)
9: GND
10: Shield/NC (reserve)

Wiring: use sealed momentary NO buttons on the handlebar. Connect each GPIO line to one side of a button, other side to GND. Enable `INPUT_PULLUP`; pressed reads LOW. Use a sealed cable gland and strain relief into the enclosure.

## License
Provided as-is. Verify against datasheets and perform bring-up testing.