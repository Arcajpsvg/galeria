class ValidatorFormEvents {
  constructor(value) {
    this.value = value;
    this.result = [];
  }

  isNotEmpty(msg) {
    if (!this.value) {
      this.result.push(msg);
    }
    return this;
  }

  isLenght(minLen, maxLen, msg) {
    if (this.value.length < minLen || this.value.length > maxLen) {
      this.result.push(msg);
    }
    return this;
  }

  isEmail(msg) {
    const regex = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    const regex2 = /\S+@\S+\.\S+/;

    if (!regex2.test(this.value)) {
      this.result.push(msg);
    }
    return this;
  }

  isRequired(msg) {
    if (this.value.length === 0) {
      this.result.push(msg);
    }
    return this;
  }

  isNotZero(msg) {
    if (this.value == 0) {
      this.result.push(msg);
    }
    return this;
  }

  isMayus(msg) {
    const regex = /^[A-Z]/;

    if (!regex.test(this.value)) {
      this.result.push(msg);
    }
  }

  isURL(msg) {
    if (!/\.(jpeg|jpg|gif|png)$/.test(this.value)) {
      this.result.push(msg);
    }

    return this;
  }

  isFormat(msg) {
    if (
      !(
        this.value[0] == "(" &&
        this.value[1] == "+" &&
        this.value[4] == ")" &&
        this.value[8] == " " &&
        this.value[12] == " "
      )
    ) {
      this.result.push(msg);
    }
    return this;
  }
}

export default ValidatorFormEvents;
