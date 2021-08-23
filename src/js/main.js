console.log("working");

// const btn = document.querySelector("button.mobile-menu-button");
// const menu = document.querySelector(".mobile-menu");

// btn.addEventListener("click", () => {
//   menu.classList.toggle("hidden");
// });

document.addEventListener("alpine:init", () => {
  Alpine.data("dropdown", () => ({
    open: false,

    slide: {
      ["x-transition:enter"]() {
        return "transition-transform transition-opacity ease-out duration-300";
      },
      ["x-transition:enter-start"]() {
        return "opacity-0 transform -translate-y-2";
      },
      ["x-transition:enter-end"]() {
        return "opacity-100 transform translate-y-0";
      },
      ["x-transition:leave"]() {
        return "transition ease-in duration-300";
      },
      ["x-transition:leave-end"]() {
        return "opacity-0 transform -translate-y-3";
      },

    // ['x-transition:enter']() {
    //     return "transition ease-in-out duration-700"
    // },
    // ['x-transition:enter-start']() {
    //     return "opacity-0 transform scale-y-0 translate-y-1/2"
    // },
    // ['x-transition:enter-end']() {
    //     return "opacity-100 transform scale-y-100 -translate-y-0"
    // },
    // ['x-transition:leave']() {
    //     return "transition ease-in-out duration-700"
    // },
    // ['x-transition:leave-start']() {
    //     return "opacity-100 transform scale-y-100 -translate-y-0"
    // },
    // ['x-transition:leave-end']() {
    //     return "opacity-0 transform scale-y-0 -translate-y-1/2"
    // }
    },

    toggle() {
      this.open = !this.open;
    },
  }));

  window.Alpine.geekDialogs = window.Alpine.geekDialogs || {};

  window.Alpine.geekDialogs = function(dialogType) {
    if(window.Alpine.geekDialogs[dialogType] !== undefined) {
        console.error("dialog tipus ismetlodik", dialogType)
        return {}
    }

    window.Alpine.geekDialogs[dialogType] = {
        isDialogOpen: false,
        dialogType: dialogType,
        openEventParams: {},
        overlay: {
            ['x-show']() {
                return this.isDialogOpen;
            }
        },
        dialog: {
            ['x-show']() {
                return this.isDialogOpen;
            },
            ['x-on:click.outside']() {
                this.isDialogOpen = false;
            }
        },
        open: {
            ['x-on:click']() {
                this.isDialogOpen = true;
            }
        },
        close: {
            ['x-on:click']() {
                this.isDialogOpen = false;
            }
        },
        changeDialog: function(dType) {
            this.isDialogOpen = false;
            var event = new CustomEvent("change-dialog", {
                detail: {
                    dialogType: dType
                }
            });
            window.dispatchEvent(event);
        },
        bindings: {
            ['x-on:change-dialog.window']($event) {
                if (this.dialogType == $event.detail.dialogType) {
                    this.isDialogOpen = true;
                    this.openEventParams = $event.detail.openEventParams;
                }
            }
        }
    }
    return window.Alpine.geekDialogs[dialogType]
}

});
