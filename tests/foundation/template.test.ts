import { emailTemplate } from "../../src/foundation/template";

describe(emailTemplate, () => {
    test('emailTemplate should contain a greeting', () => {
        expect(emailTemplate).toContain('Hi, ')
    });

    test('emailTemplate shpuld contain a {{name}} and {{orderId}', () => {
        expect(emailTemplate).toContain('{{name}}')
        expect(emailTemplate).toContain('{{orderId}}')
    })
})