const {
  QWidget,
  WindowType,
  FlexLayout,
  QLabel,
  QFont,
  AlignmentFlag,
  QPushButton,
} = require("@nodegui/nodegui");

class Widget {
  constructor(options) {
    this.window = new QWidget();

    this.initializeWidget = () => {
      this.window.setWindowFlag(WindowType.FramelessWindowHint, true);
      this.window.setWindowFlag(WindowType.WindowStaysOnBottomHint, true);
      this.window.setWindowFlag(WindowType.WindowDoesNotAcceptFocus, true);

      this.window.setObjectName("win");

      this.window.setGeometry(
        options.x - options.sizeX / 2,
        options.y - options.sizeY / 2,
        options.sizeX,
        options.sizeY
      );

      this.window.setStyleSheet(`
        #win {
          border: 5px solid ${options.borderColor || "blue"};
          ${ options.hasOwnProperty("bgColor") ? `color: ${options.bgColor};` : "" }
        }  
        
        #win > * {
          margin-top: 3%;
        }
      `);

      this.window.setLayout(new FlexLayout());

      return this;
    };

    this.addLabel = (text, size, weight, alignment) => {
      const label = new QLabel();

      label.setText(text);
      label.setFont(new QFont("JetBrains Mono", size, weight, false));
      label.setMargin(3); 
      label.setAlignment(AlignmentFlag[`Align${alignment}`]);
      label.setInlineStyle(`overflow: visible;`)

      this.window.layout.addWidget(label);

      return this;
    }; 
    
    this.addButton = (text, callback) => {
      const button = new QPushButton();
      
      button.setText(text)
      button.setFont(new QFont("JetBrains Mono", 14, 400, false));
      button.animateClick(400);
      button.setInlineStyle(`padding-left: 10%; padding-right: 10%; margin-left: 20%; margin-right: 20%;`)
      
      button.addEventListener("clicked", callback);
      
      this.window.layout.addWidget(button);
      
      return this;
    }

    this.setTransparency = (opacity) => {
      this.window.setWindowOpacity(opacity);
    };

    this.addWidget = (widget) => {
      this.window.layout.addWidget(widget);

      return this;
    };

    this.startWidget = () => this.window.show();
  }
}

module.exports = {
  Widget,
};
