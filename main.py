def on_forever():
    if pins.digital_read_pin(DigitalPin.P2) == 1:
        pins.digital_write_pin(DigitalPin.P16, 1)
        music.start_melody(music.built_in_melody(Melodies.DADADADUM),
            MelodyOptions.ONCE)
        basic.show_icon(IconNames.HEART)
        basic.show_icon(IconNames.SMALL_HEART)
        basic.pause(2000)
    else:
        pins.digital_write_pin(DigitalPin.P16, 0)
        music.stop_all_sounds()
        basic.clear_screen()
basic.forever(on_forever)
